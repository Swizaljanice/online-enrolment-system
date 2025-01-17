# Online Student Enrollment System

## Overview
The Online Student Enrollment System is a web application designed to manage student enrollments efficiently. The system includes features for managing students, courses, enrollments, and additional advanced functionalities like queue-based waiting lists, course searching using Binary Search Trees (BST), and course sorting by popularity.

---

## Features
1. **Students**  
   - Add, view, update, and delete student records.
   - Manage a queue-based waiting list for course enrollment using `queueService.js`.

2. **Courses**  
   - Add, view, update, and delete courses.
   - Search courses efficiently using a Binary Search Tree implemented in `searchService.js`.
   - Sort courses by popularity using `sortingService.js`.

3. **Enrollments**  
   - Enroll students in courses.
   - Handle student-course relationships.

4. **Advanced Functionalities**
   - **Queue Management**: Manage students in a waiting list for full courses.
   - **Course Searching**: Quickly locate courses using BST for optimal performance.
   - **Course Sorting**: List courses by popularity to help students make informed choices.

---

## API Endpoints

### Students
- **GET** `/students` - Fetch all students.
- **POST** `/students` - Add a new student.
- **GET** `/students/:id` - Fetch a specific student by ID.
- **PUT** `/students/:id` - Update a student's details.
- **DELETE** `/students/:id` - Delete a student.
- **POST** `/students/waitlist` - Add a student to the waiting list.

### Courses
- **GET** `/courses` - Fetch all courses.
- **POST** `/courses` - Add a new course.
- **GET** `/courses/:id` - Fetch a specific course by ID.
- **PUT** `/courses/:id` - Update a course's details.
- **DELETE** `/courses/:id` - Delete a course.
- **GET** `/courses/search` - Search for courses using keywords (powered by BST).
- **GET** `/courses/sort` - Fetch courses sorted by popularity.

### Enrollments
- **GET** `/enrollments` - Fetch all enrollments.
- **POST** `/enrollments` - Enroll a student in a course.
- **GET** `/enrollments/:id` - Fetch details of a specific enrollment.
- **DELETE** `/enrollments/:id` - Remove an enrollment.

---

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework.
- **Body-parser**: Middleware for handling JSON requests.
- **Database**: MongoDB
- **Custom Services**:
  - `queueService.js`: Manages queue-based waiting lists.
  - `searchService.js`: Implements Binary Search Tree for efficient course searching.
  - `sortingService.js`: Sorts courses based on popularity.

---



