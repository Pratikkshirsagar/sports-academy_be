exports.getAllSportsClub = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      msg: 'showing all the club',
    });
  } catch (error) {}
};

exports.getSingleSportsClub = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      msg: 'showing single the club',
    });
  } catch (error) {}
};

exports.createSportsClub = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      msg: 'added a club',
    });
  } catch (error) {}
};

exports.updateSportsClub = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      msg: 'update a club',
    });
  } catch (error) {}
};

exports.deleteSportsClub = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      msg: 'delete a gameslot',
    });
  } catch (error) {}
};
