/*
Our Queue should contain Three basic sections: Create Queue Section, Join Queue Section and Display Queue Section.
Imagine this is our web page, the general structure should look like this:

---------------------------------------------------------------------
|                   Code Platoon Simplified Queue                   |
|                                                                   |
|                        TA/Intructor's name                        |
|                          |Open Queue|                             |
|                                                                   |
|                         (Queue List)                              |
|                 Francisco's Queue (For example)                   |
|                                                                   |
|        Join |Student's name    Question description   Time|       |
|              (List each student from the queue here)              |
|                                                                   |
|                 Adam's Queue (Another example)                    |
|                            ......                                 |
---------------------------------------------------------------------

The input flow is similar to this: 
Check if there are any TA/Instructor Queues -> If no, students cannot join; if yes, enter student's information to join -> Display queues
*/



describe('First Code Platoon Queue Test Suite', () => {
  it('Visits the app and asserts title', () => {
    cy.visit('/'); // Replace with your app's URL
    cy.get('h1').should('contain', 'Code Platoon Simplified Queue'); // Adjust the selector and text as needed

    //Create an input tag and name it "queue_name"
    cy.contains("queue_name")

    //Also create a button to send the queue created into our global queue collection

  });

  
});
