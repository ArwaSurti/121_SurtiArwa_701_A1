
function getStudentBotResponse(input) {
  const message = input.toLowerCase();

  if (message.includes("admission")) {
    return "To apply for admission, please visit the admission portal and fill out the application form.";
  } else if (message.includes("fees")) {
    return "The semester fee is ₹45,000. You can pay online or at the university counter.";
  } else if (message.includes("courses")) {
    return "We offer B.Tech, B.Sc, M.Tech, MBA and PhD programs.";
  } else if (message.includes("exam")) {
    return "Mid-term exams start on 1st September. Check your timetable for details.";
  } else if (message.includes("thank")) {
    return "You're welcome! Let me know if you need more help.";
  } else {
    return "Sorry, I didn't understand that. Try asking about admission, fees, courses, or exams.";
  }
}

module.exports = { getStudentBotResponse };
