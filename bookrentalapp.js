// Define the Book class
class Book {
    // Static properties
    static totalBooks = 100;
    static availableBooks = 95;
  
    // Constructor for Book instances
    constructor(bookId, title) {
      this.bookId = bookId; // Unique ID for the book
      this.title = title; // Book title
    }
  
    // Static method to rent a book
    static rentBook() {
      switch (true) {
        case Book.availableBooks > 0:
          Book.availableBooks--;
          console.log("Book rented successfully!");
          break;
        default:
          console.log("No books available!");
          break;
      }
    }
  
    // Static method to return a book
    static returnBook() {
      switch (true) {
        case Book.availableBooks < Book.totalBooks:
          Book.availableBooks++;
          console.log("Book returned successfully!");
          break;
        default:
          console.log("All books are already in stock!");
          break;
      }
    }
  }
  
  // Define the Customer class
  class Customer {
    // Static property
    static totalCustomers = 0;
  
    // Constructor for Customer instances
    constructor(customerId, name) {
      this.customerId = customerId; // Unique ID for the customer
      this.name = name; // Customer name
      Customer.totalCustomers++; // Increment total customers
    }
  
    // Method to register a customer
    register() {
      console.log(`Customer ${this.name} has been registered.`);
    }
  
    // Method to borrow a book
    borrowBook() {
      console.log(`${this.name} is borrowing a book...`);
      Book.rentBook();
    }
  }
  
  // Example Usage
  const book1 = new Book("B001", "Obeject Oriented Analysis 1"); // Create a book instance
  const customer1 = new Customer("U001", "Adebayo Owolabi W3"); // Create a customer instance
  
  // Customer actions
  customer1.register();
  customer1.borrowBook();
  
  // Simulating a book return
  Book.returnBook();
  