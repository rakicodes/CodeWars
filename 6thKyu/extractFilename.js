class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName
          .split('_')
          .slice(1)
          .join('_')
          .split('.')
          .slice(0, -1)
          .join('.')
    }
}