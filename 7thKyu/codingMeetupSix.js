function isSameLanguage(list) {
    const language = list[0].language;
    return list.every(person => person.language === language)
  }