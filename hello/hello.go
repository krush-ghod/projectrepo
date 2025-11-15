// including packages
package main

// importing the output and input function
import (
	"fmt"
)

// Create aa funtion
func NewLang() string {
	// create an empty viable to store the language
	lang := ""
	// print out a message to the user
	fmt.Println("Enter your favorite programming language: ")
	// lets get the input from the user and save into the lang
	fmt.Scan(&lang)

	// print out an encouraging message
	fmt.Printf("Hey man, I totally agree with you. %s is the best language to master\n", lang)
	return lang
}

// creating a new function that loops whether or not the answer is correct
// this fuction creates a quiz for the user
func quiz() list {
	// lets ask the questions
	questions := []
	questionOne := "what is the name of the programmer who wrote this quiz?"
	fmt.Printf("%s\n", questionOne)
	return questionOne
}

// create a function that has the answer to the quiz
func answer() string {
	ans := "Davisone"
	return ans
}

// this function take users input and turn it into an return it to the checker

func checker(userInput string) bool {
	// check if the answer given by the user is correct
	ans := answer()
	for {
		if userInput == ans {
			fmt.Println("you just passed the GoLang test.")
			break
		} else {
			fmt.Println("Sorry You have to learn the Programmers name, Go back to the question")
			secondChance := ""
			quiz()
			fmt.Scanln(&secondChance)
			checker(secondChance)
			break
		}
	}
	return true
}

// defining our main function
func main() {
	NewLang()
	// start quiz
	ans := ""
	fmt.Println("Quiz is about to start....")
	quiz()
	fmt.Scanln(&ans)
	checker(ans)

	answer()
}
