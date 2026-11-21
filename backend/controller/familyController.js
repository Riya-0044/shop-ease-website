const Family = require("../models/Family");

// 1. Get All Families (Admin Panel ke liye)
const getAllFamilies = async (req, res) => {
  try {
    const families = await Family.find()
      .populate("admin", "name email")
      .populate("members", "name email");

    res.status(200).json(families);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 2. Delete Family (Admin Panel ke delete button ke liye)
const deleteFamily = async (req, res) => {
  try {
    const family = await Family.findByIdAndDelete(req.params.id);

    if (!family) {
      return res.status(404).json({
        success: false,
        message: "Family Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Family Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 3. Create Family
const createFamily = async (req, res) => {
  try {
    const { familyName, admin } = req.body;

    const inviteCode =
      "FAM" + Math.random().toString(36).substring(2, 8).toUpperCase();

    const family = await Family.create({
      familyName,
      inviteCode,
      admin,
      members: [admin],
    });

    res.status(201).json({
      success: true,
      message: "Family Created Successfully",
      family,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 4. Join Family
const joinFamily = async (req, res) => {
  try {
    const { inviteCode, userId } = req.body;

    const family = await Family.findOne({ inviteCode });

    if (!family) {
      return res.status(404).json({
        success: false,
        message: "Invalid Family Code",
      });
    }

    if (!family.members.includes(userId)) {
      family.members.push(userId);
      await family.save();
    }

    res.status(200).json({
      success: true,
      message: "Joined Family Successfully",
      family,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 5. Get Single Family
const getFamily = async (req, res) => {
  try {
    const family = await Family.findById(req.params.id)
      .populate("admin", "name email")
      .populate("members", "name email");

    if (!family) {
      return res.status(404).json({
        success: false,
        message: "Family Not Found",
      });
    }

    res.status(200).json(family);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 6. Leave Family
const leaveFamily = async (req, res) => {
  try {
    const { familyId, userId } = req.body;

    const family = await Family.findById(familyId);

    if (!family) {
      return res.status(404).json({
        success: false,
        message: "Family Not Found",
      });
    }

    family.members = family.members.filter(
      (member) => member.toString() !== userId
    );

    await family.save();

    res.status(200).json({
      success: true,
      message: "Left Family Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 7. Get the Family a Given User Belongs To (admin ya member, dono)
const getFamilyByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const family = await Family.findOne({
      $or: [{ admin: userId }, { members: userId }],
    })
      .populate("admin", "name email")
      .populate("members", "name email");

    if (!family) {
      return res.status(200).json(null);
    }

    res.status(200).json(family);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllFamilies,
  deleteFamily,
  createFamily,
  joinFamily,
  getFamily,
  leaveFamily,
  getFamilyByUser,
};