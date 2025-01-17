//services/sortingService.js
class SortingService {
    static sortByPopularity(courses) {
      return courses.sort((a, b) => b.popularity - a.popularity);
    }
  
    static sortByAvailability(courses) {
      return courses.sort((a, b) => a.seats - b.seats);
    }
  }
  
  module.exports = SortingService;
  