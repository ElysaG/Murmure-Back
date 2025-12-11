const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  nbChapter: { type: Number, required: true },
  titleChapter: { type: String, required: true },
  contentChapter: { type: String, required: true },
  contentFlashcard: { type: String, required: true },
  quizz: [
    {
      question: String,
      responses: [String],
      results: [String],
    }
  ]
});

const Chapter = mongoose.model("Chapters", ChapterSchema);
module.exports = Chapter;
