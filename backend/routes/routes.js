const express = require("express");
const router = express.Router();

const {
  getAnxiety,
  getAnxietyByMonthAndYear,
  setAnxiety,
  editAnxiety,
  getDream,
  getDreamByMonthAndYear,
  setDream,
  editDream,
  getHighlightGratitudeTracker,
  getHighlightGratitudeTrackerByMonthAndYear,
  setHighlightGratitudeTracker,
  editHighlightGratitudeTracker,
  getMoodTracker,
  getMoodTrackerByMonthAndYear,
  setMoodTracker,
  editMoodTracker,
  getMovies,
  getMoviesByMonthAndYear,
  setMovies,
  editMovies,
  getMyDayRate,
  getMyDayRateByMonthAndYear,
  setMyDayRate,
  editMyDayRate,
  getReadingJournal,
  getReadingJournalByMonthAndYear,
  setReadingJournal,
  editReadingJournal,
  getSleepJournal,
  getSleepJournalByMonthAndYear,
  setSleepJournal,
  editSleepJournal,
  getWeatherTracker,
  getWeatherTrackerByMonthAndYear,
  setWeatherTracker,
  editWeatherTracker,
  writeTodaysEntry,
  getHighlightJournal,
  getHighlightJournalByMonthAndYear,
  setHighlightJournal,
  editHighlightJournal,
  getGratitudeJournal,
  getGratitudeJournalByMonthAndYear,
  setGratitudeJournal,
  editGratitudeJournal,
  getWeatherJournal,
  getWeatherJournalByMonthAndYear,
  setWeatherJournal,
  editWeatherJournal,
  getTemperatureJournal,
  getTemperatureJournalByMonthAndYear,
  setTemperatureJournal,
  editTemperatureJournal,
} = require("../controllers/controller");

router.route("/entry").post(writeTodaysEntry);

router.route("/anxiety").get(getAnxiety).post(setAnxiety).put(editAnxiety);
router.route("/anxiety/:month/:year").get(getAnxietyByMonthAndYear);

router.route("/dream").get(getDream).post(setDream).put(editDream);
router.route("/dream/:month/:year").get(getDreamByMonthAndYear);

router
  .route("/highlightGratitude")
  .get(getHighlightGratitudeTracker)
  .post(setHighlightGratitudeTracker)
  .put(editHighlightGratitudeTracker);
router
  .route("/highlightGratitude/:month/:year")
  .get(getHighlightGratitudeTrackerByMonthAndYear);

router
  .route("/mood")
  .get(getMoodTracker)
  .post(setMoodTracker)
  .put(editMoodTracker);
router.route("/mood/:month/:year").get(getMoodTrackerByMonthAndYear);

router.route("/movies").get(getMovies).post(setMovies).put(editMovies);
router.route("/movies/:month/:year").get(getMoviesByMonthAndYear);

router
  .route("/rateMyDay")
  .get(getMyDayRate)
  .post(setMyDayRate)
  .put(editMyDayRate);

router.route("/rateMyDay/:month/:year").get(getMyDayRateByMonthAndYear);
router
  .route("/readingJournal")
  .get(getReadingJournal)
  .post(setReadingJournal)
  .put(editReadingJournal);

router
  .route("/readingJournal/:month/:year")
  .get(getReadingJournalByMonthAndYear);
router
  .route("/sleepJournal")
  .get(getSleepJournal)
  .post(setSleepJournal)
  .put(editSleepJournal);
router.route("/sleepJournal/:month/:year").get(getSleepJournalByMonthAndYear);

router
  .route("/weatherTracker")
  .get(getWeatherTracker)
  .post(setWeatherTracker)
  .put(editWeatherTracker);
router
  .route("/weatherTracker/:month/:year")
  .get(getWeatherTrackerByMonthAndYear);

router
  .route("/highlight")
  .get(getHighlightJournal)
  .post(setHighlightJournal)
  .put(editHighlightJournal);
router.route("/highlight/:month/:year").get(getHighlightJournalByMonthAndYear);
router
  .route("/gratitude")
  .get(getGratitudeJournal)
  .post(setGratitudeJournal)
  .put(editGratitudeJournal);
router.route("/gratitude/:month/:year").get(getGratitudeJournalByMonthAndYear);
router
  .route("/weather")
  .get(getWeatherJournal)
  .post(setWeatherJournal)
  .put(editWeatherJournal);
router.route("/weather/:month/:year").get(getWeatherJournalByMonthAndYear);
router
  .route("/temperature")
  .get(getTemperatureJournal)
  .post(setTemperatureJournal)
  .put(editTemperatureJournal);
router
  .route("/temperature/:month/:year")
  .get(getTemperatureJournalByMonthAndYear);

module.exports = router;
