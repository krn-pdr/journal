const asyncHandler = require("express-async-handler");
const AnxietyModel = require("../models/AnxietyModel");
const DreamModel = require("../models/dreamModel");
const highlightGratitudeTracker = require("../models/highlightGratitudeTracker");
const moodTracker = require("../models/moodTracker");
const movieData = require("../models/movieData");
const movieTracker = require("../models/movieTracker");
const myDayRateModel = require("../models/myDayRateModel");
const readingJournal = require("../models/readingJournal");
const sleepJournal = require("../models/sleepJournal");
const weatherTracker = require("../models/weatherTracker");
const highlightJournal = require("../models/highlightJournal");
const gratitudeJournal = require("../models/gratitudeJournal");
const weatherJournal = require("../models/weatherJournal");
const temperatureJournal = require("../models/temperatureJournal");

const writeTodaysEntry = asyncHandler(async (req, res) => {
  const { date } = req.body;
  const anxiety = await AnxietyModel({
    date,
    anxietyLevel: 0,
  });
  const dream = await DreamModel({
    date,
    dreamType: "",
    dreamDescription: "",
  });
  const highlightGratitude = await highlightGratitudeTracker({
    date,
    highlight: "",
    gratitude: "",
  });
  const moodData = new moodTracker({
    date,
    mood: 0,
  });
  const newMyDayRate = new myDayRateModel({
    date,
    myDayRate: 0,
  });
  const newReading = new readingJournal({
    date,
    readingDescription: "",
    readingPageCount: 0,
  });
  const newSleep = new sleepJournal({
    date,
    sleepQuality: 0,
    sleepDescription: "",
    goToBedTime: 0,
    wakeUpTime: 0,
  });
  const newWeather = new weatherTracker({
    date,
    weatherType: 0,
    temperatureRange: 0,
  });
  await anxiety.save();
  await dream.save();
  await highlightGratitude.save();
  await moodData.save();
  await newMyDayRate.save();
  await newReading.save();
  await newSleep.save();
  await newWeather.save();
  res.json({ message: "Today's entry saved successfully" });
});

const getAnxiety = asyncHandler(async (req, res) => {
  const anxiety = await AnxietyModel.find({});
  res.json(anxiety);
});

const getAnxietyByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const anxiety = await AnxietyModel.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(anxiety);
});

const setAnxiety = asyncHandler(async (req, res) => {
  const { date, anxietyLevel } = req.body;
  const tempAnxiety = await AnxietyModel.find({ date });
  if (tempAnxiety.length > 0) {
    // overwrite
    const anxiety = tempAnxiety[0];
    anxiety.anxietyLevel = anxietyLevel;
    await anxiety.save();
    res.json({ message: "Anxiety data saved successfully" });
  } else {
    const anxiety = new AnxietyModel({
      date,
      anxietyLevel,
    });
    await anxiety.save();
    res.json({ message: "Anxiety data saved successfully" });
  }
});

const editAnxiety = asyncHandler(async (req, res) => {
  const { date, anxietyLevel } = req.body;
  const anxieties = await AnxietyModel.find({ date });
  if (anxieties.length > 0) {
    const anxiety = anxieties[0];
    anxiety.anxietyLevel = anxietyLevel;
    await anxiety.save();
    res.json({ message: "Anxiety data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Anxiety data not found");
  }
});

const getDream = asyncHandler(async (req, res) => {
  const dream = await DreamModel.find({});
  res.json(dream);
});

const getDreamByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const dream = await DreamModel.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(dream);
});

const setDream = asyncHandler(async (req, res) => {
  const { date, dreamType, dreamDescription } = req.body;
  const dreams = await DreamModel.find({ date });
  var dream;
  if (dreams.length > 0) {
    dream = dreams[0];
    dream.dreamType = dreamType;
    dream.dreamDescription = dreamDescription;
  } else {
    dream = new DreamModel({
      date,
      dreamType,
      dreamDescription,
    });
  }
  await dream.save();
  res.json({ message: "Dream data saved successfully" });
});

const editDream = asyncHandler(async (req, res) => {
  const { date, dreamType, dreamDescription } = req.body;
  const dreams = await DreamModel.find({ date });
  if (dreams.length > 0) {
    const dream = dreams[0];
    dream.dreamType = dreamType;
    dream.dreamDescription = dreamDescription;
    await dream.save();
    res.json({ message: "Dream data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Dream data not found");
  }
});

const getHighlightGratitudeTracker = asyncHandler(async (req, res) => {
  const highlightGratitude = await highlightGratitudeTracker.find({});
  res.json(highlightGratitude);
});

const getHighlightGratitudeTrackerByMonthAndYear = asyncHandler(
  async (req, res) => {
    const { month, year } = req.params;
    // date will in string and date will like "dd/mm/yy"
    const highlightGratitude = await highlightGratitudeTracker.find({
      date: {
        $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
      },
    });
    res.json(highlightGratitude);
  }
);

const setHighlightGratitudeTracker = asyncHandler(async (req, res) => {
  const { date, highlight, gratitude } = req.body;
  const highlightGratitude = new highlightGratitudeTracker({
    date,
    highlight,
    gratitude,
  });
  await highlightGratitude.save();
  res.json({ message: "Highlight and Gratitude data saved successfully" });
});

const editHighlightGratitudeTracker = asyncHandler(async (req, res) => {
  const { date, highlight, gratitude } = req.body;
  const highlightGratitude = await highlightGratitudeTracker.find({ date });
  if (highlightGratitude) {
    highlightGratitude.highlight = highlight;
    highlightGratitude.gratitude = gratitude;
    await highlightGratitude.save();
    res.json({ message: "Highlight and Gratitude data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Highlight and Gratitude data not found");
  }
});

const getMoodTracker = asyncHandler(async (req, res) => {
  const mood = await moodTracker.find({});
  res.json(mood);
});

const getMoodTrackerByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const mood = await moodTracker.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(mood);
});

const setMoodTracker = asyncHandler(async (req, res) => {
  const { date, mood } = req.body;
  var moodData;
  const moods = await moodTracker.find({ date });
  if (moods.length > 0) {
    moodData = moods[0];
    moodData.mood = mood;
  } else {
    moodData = new moodTracker({
      date,
      mood,
    });
  }
  await moodData.save();
  res.json({ message: "Mood data saved successfully" });
});

const editMoodTracker = asyncHandler(async (req, res) => {
  const { date, mood } = req.body;
  const moods = await moodTracker.find({ date });
  if (moods.length > 0) {
    const moodData = moods[0];
    moodData.mood = mood;
    await moodData.save();
    res.json({ message: "Mood data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Mood data not found");
  }
});

const getMovies = asyncHandler(async (req, res) => {
  const movie = await movieTracker.find({});
  res.json(movie);
});

const getMoviesByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const movie = await movieTracker.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(movie);
});

const setMovies = asyncHandler(async (req, res) => {
  const { date, movieName, movieGenre, movieRating, movieHighlight } = req.body;
  var movieData;
  const movies = await movieTracker.find({ date });
  if (movies.length > 0) {
    movieData = movies[0];
    movieData.movieName = movieName;
    movieData.movieGenre = movieGenre;
    movieData.movieRating = movieRating;
    movieData.movieHighlight = movieHighlight;
  } else {
    movieData = new movieTracker({
      date,
      movieName,
      movieGenre,
      movieRating,
      movieHighlight,
    });
  }
  await movieData.save();
  res.json({ message: "Movie data saved successfully" });
});

const editMovies = asyncHandler(async (req, res) => {
  const { date, movieName, movieGenre, movieRating, movieHighlight } = req.body;
  const movies = await movieTracker.find({ date });
  if (movies.length > 0) {
    const movieData = movies[0];
    movieData.movieName = movieName;
    movieData.movieGenre = movieGenre;
    movieData.movieRating = movieRating;
    movieData.movieHighlight = movieHighlight;
    await movieData.save();
    res.json({ message: "Movie data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Movie data not found");
  }
});

const getMyDayRate = asyncHandler(async (req, res) => {
  const myDayRate = await myDayRateModel.find({});
  res.json(myDayRate);
});

const getMyDayRateByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const myDayRate = await myDayRateModel.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(myDayRate);
});

const setMyDayRate = asyncHandler(async (req, res) => {
  const { date, myDayRate } = req.body;
  var newMyDayRate;
  const rates = await myDayRateModel.find({ date });
  if (rates.length > 0) {
    newMyDayRate = rates[0];
    newMyDayRate.myDayRate = myDayRate;
  } else {
    newMyDayRate = new myDayRateModel({
      date,
      myDayRate,
    });
  }
  await newMyDayRate.save();
  res.json({ message: "My Day Rate data saved successfully" });
});

const editMyDayRate = asyncHandler(async (req, res) => {
  const { date, myDayRate } = req.body;
  const rates = await myDayRateModel.find({ date });
  if (rates.length > 0) {
    const myDayRateData = rates[0];
    myDayRateData.myDayRate = myDayRate;
    await myDayRateData.save();
    res.json({ message: "My Day Rate data updated successfully" });
  } else {
    res.status(404);
    throw new Error("My Day Rate data not found");
  }
});

const getReadingJournal = asyncHandler(async (req, res) => {
  const reading = await readingJournal.find({});
  res.json(reading);
});

const getReadingJournalByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const reading = await readingJournal.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(reading);
});

const setReadingJournal = asyncHandler(async (req, res) => {
  const { date, readingDescription, readingPageCount } = req.body;
  var newReading;
  const readings = await readingJournal.find({ date });
  if (readings.length > 0) {
    newReading = readings[0];
    newReading.readingDescription = readingDescription;
    newReading.readingPageCount = readingPageCount;
  } else {
    newReading = new readingJournal({
      date,
      readingDescription,
      readingPageCount,
    });
  }
  await newReading.save();
  res.json({ message: "Reading data saved successfully" });
});

const editReadingJournal = asyncHandler(async (req, res) => {
  const { date, readingDescription, readingPageCount } = req.body;
  const readings = await readingJournal.find({ date });
  if (readings.length > 0) {
    const reading = readings[0];
    reading.readingDescription = readingDescription;
    reading.readingPageCount = readingPageCount;
    await reading.save();
    res.json({ message: "Reading data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Reading data not found");
  }
});

const getSleepJournal = asyncHandler(async (req, res) => {
  const sleep = await sleepJournal.find({});
  res.json(sleep);
});

const getSleepJournalByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const sleep = await sleepJournal.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(sleep);
});

const setSleepJournal = asyncHandler(async (req, res) => {
  const { date, sleepQuality, sleepDescription, goToBedTime, wakeUpTime } =
    req.body;
  var newSleep;
  const sleeps = await sleepJournal.find({ date });
  if (sleeps.length > 0) {
    newSleep = sleeps[0];
    newSleep.sleepQuality = sleepQuality;
    newSleep.sleepDescription = sleepDescription;
    newSleep.goToBedTime = goToBedTime;
    newSleep.wakeUpTime = wakeUpTime;
  } else {
    newSleep = new sleepJournal({
      date,
      sleepQuality,
      sleepDescription,
      goToBedTime,
      wakeUpTime,
    });
  }
  await newSleep.save();
  res.json({ message: "Sleep data saved successfully" });
});

const editSleepJournal = asyncHandler(async (req, res) => {
  const { date, sleepQuality, sleepDescription, goToBedTime, wakeUpTime } =
    req.body;
  const sleeps = await sleepJournal.find({ date });
  if (sleeps.length > 0) {
    const sleep = sleeps[0];
    sleep.sleepQuality = sleepQuality;
    sleep.sleepDescription = sleepDescription;
    sleep.goToBedTime = goToBedTime;
    sleep.wakeUpTime = wakeUpTime;
    await sleep.save();
    res.json({ message: "Sleep data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Sleep data not found");
  }
});

const getWeatherTracker = asyncHandler(async (req, res) => {
  const weather = await weatherTracker.find({});
  res.json(weather);
});

const getWeatherTrackerByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const weather = await weatherTracker.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(weather);
});

const setWeatherTracker = asyncHandler(async (req, res) => {
  const { date, weatherType, temperatureRange } = req.body;
  const newWeather = new weatherTracker({
    date,
    weatherType,
    temperatureRange,
  });
  await newWeather.save();
  res.json({ message: "Weather data saved successfully" });
});

const editWeatherTracker = asyncHandler(async (req, res) => {
  const { date, weatherType, temperatureRange } = req.body;
  const weather = await weatherTracker.find({ date });
  if (weather) {
    weather.weatherType = weatherType;
    weather.temperatureRange = temperatureRange;
    await weather.save();
    res.json({ message: "Weather data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Weather data not found");
  }
});

const getHighlightJournal = asyncHandler(async (req, res) => {
  const highlight = await highlightJournal.find({});
  res.json(highlight);
});

const getHighlightJournalByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const highlight = await highlightJournal.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(highlight);
});

const setHighlightJournal = asyncHandler(async (req, res) => {
  const { date, highlight } = req.body;
  var newHighlight;
  const highlights = await highlightJournal.find({ date });
  if (highlights.length > 0) {
    newHighlight = highlights[0];
    newHighlight.highlight = highlight;
  } else {
    newHighlight = new highlightJournal({
      date,
      highlight,
    });
  }
  await newHighlight.save();
  res.json({ message: "Highlight data saved successfully" });
});

const editHighlightJournal = asyncHandler(async (req, res) => {
  const { date, highlight } = req.body;
  const highlights = await highlightJournal.find({ date });
  if (highlights.length > 0) {
    const highlightData = highlights[0];
    highlightData.highlight = highlight;
    await highlightData.save();
    res.json({ message: "Highlight data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Highlight data not found");
  }
});

const getGratitudeJournal = asyncHandler(async (req, res) => {
  const gratitude = await gratitudeJournal.find({});
  res.json(gratitude);
});

const getGratitudeJournalByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const gratitude = await gratitudeJournal.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(gratitude);
});

const setGratitudeJournal = asyncHandler(async (req, res) => {
  const { date, gratitude } = req.body;
  var newGratitude;
  const gratitudes = await gratitudeJournal.find({ date });
  if (gratitudes.length > 0) {
    newGratitude = gratitudes[0];
    newGratitude.gratitude = gratitude;
  } else {
    newGratitude = new gratitudeJournal({
      date,
      gratitude,
    });
  }
  await newGratitude.save();
  res.json({ message: "Gratitude data saved successfully" });
});

const editGratitudeJournal = asyncHandler(async (req, res) => {
  const { date, gratitude } = req.body;
  const gratitudes = await gratitudeJournal.find({
    date,
  });
  if (gratitudes.length > 0) {
    const gratitudeData = gratitudes[0];
    gratitudeData.gratitude = gratitude;
    await gratitudeData.save();
    res.json({ message: "Gratitude data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Gratitude data not found");
  }
});

const getWeatherJournal = asyncHandler(async (req, res) => {
  const weather = await weatherJournal.find({});
  res.json(weather);
});

const getWeatherJournalByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const weather = await weatherJournal.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(weather);
});

const setWeatherJournal = asyncHandler(async (req, res) => {
  const { date, weatherType } = req.body;
  var newWeather;
  const weathers = await weatherJournal.find({ date });
  if (weathers.length > 0) {
    newWeather = weathers[0];
    newWeather.weatherType = weatherType;
  } else {
    newWeather = new weatherJournal({
      date,
      weatherType,
    });
  }
  await newWeather.save();
  res.json({ message: "Weather data saved successfully" });
});

const editWeatherJournal = asyncHandler(async (req, res) => {
  const { date, weatherType } = req.body;
  const weathers = await weatherJournal.find({ date });
  if (weathers.length > 0) {
    const weather = weathers[0];
    weather.weatherType = weatherType;
    await weather.save();
    res.json({ message: "Weather data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Weather data not found");
  }
});

const getTemperatureJournal = asyncHandler(async (req, res) => {
  const temperature = await temperatureJournal.find({});
  res.json(temperature);
});

const getTemperatureJournalByMonthAndYear = asyncHandler(async (req, res) => {
  const { month, year } = req.params;
  // date will in string and date will like "dd/mm/yy"
  const temperature = await temperatureJournal.find({
    date: {
      $regex: new RegExp(`^\\d{2}/${month}/${year}$`),
    },
  });
  res.json(temperature);
});

const setTemperatureJournal = asyncHandler(async (req, res) => {
  const { date, temperatureRange } = req.body;
  var newTemperature;
  const temperatures = await temperatureJournal.find({ date });
  if (temperatures.length > 0) {
    newTemperature = temperatures[0];
    newTemperature.temperatureRange = temperatureRange;
  } else {
    newTemperature = new temperatureJournal({
      date,
      temperatureRange,
    });
  }
  await newTemperature.save();
  res.json({ message: "Temperature data saved successfully" });
});

const editTemperatureJournal = asyncHandler(async (req, res) => {
  const { date, temperatureRange } = req.body;
  const temperatures = await temperatureJournal.find({ date });
  if (temperatures.length > 0) {
    const temperature = temperatures[0];
    temperature.temperatureRange = temperatureRange;
    await temperature.save();
    res.json({ message: "Temperature data updated successfully" });
  } else {
    res.status(404);
    throw new Error("Temperature data not found");
  }
});

module.exports = {
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
};
