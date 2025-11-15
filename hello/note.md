Before starting your Basic Go program, you would have to start with telling the compiler where the package should be.
so ``` package hello ``` simply tells the compiler we are compiling the hello file.

also we have to import out print out funtion, unlike python we can have it easy to print anything without importing it. but in languages like C, C++, JAVA, GO, and so on, we have to import it.

```bash C
include stdio.h
```
but in Java and Go, we import
``` bash Go
import "fmt"
``` 
```bash Java
import system
```
no we have to create our main function, in the compiler languages we create a main function where everything would work.
lets assume this is the work station of everything, and we name it main. 
within this file, we put everything there. like calling those functions and so on.


note that commenting in Go is just like commenting in Java, C and so on
when defining a funtion, the you would have to place a parenthesis infront of the name of the function just like you do in python. followed by a curly bracket in Java or C


to run a go ,language you have to build it first.
follow these principles to build it
1. make sure you are in the right directory(folder) where you file is
    you can cd in that directory using this command.
    ```bash pws
    cd ./(directoryname)
    ```
2. you need to build an initialization file for go to use
    you can do this by typing the code below
    ```bash pws
    go mod init
    ```
3. Now we can build our program.
    use the code below.
    ```bash pws
    go build
    ```
    afte the program is built you will find the name of the program with an ```exe``` extention that is the program you are going to run
4. Lets run our program
    use the code below
    ```bash pws
    ./(filename).exe
    ```

# CREATING VARIABLES
just like in any other language, we can use variables to do lots of things, the brings flexibilty in the code and also saves developers maximum time.
in all programming languages, we have the basic four types of variables namely
```bash Go
string
int ('int8, 16,32,64','uint 8, 16,32,64') the difference here is that they int allows negativite numbers while uint does not
float
bool
```
thats not all but you are likely to use this four every where in your codes.
## ASSIGNING VALUES TO VARIABLES
when declearing (assigning value to) a variable, just like in JS, and any other code, the type is necessary, but there are short hands, yes its allowed in GoLang too
example:
``` bash Go
var Name string = "Davisone"
## we can say 
Name =: "Davisone"
```
the '=:' take off the load of telling the compiler what type of variable you are declearing. 

# CONDITIONALS
the conditionals in this language is similar to any other language especially JS and Java
```bash Go
    if something != nil {
        // Do whats is in here
    } else {
        // Do this.
    }
```

# LOOPS
this is fascinating because there is nothing like a while loop in GoLang, it rather uses only for loop, 
like when you want to iterate endlessly, in other languages like python, Java, JS and so on, you would use a while loop this language permits you ro save time learning syntax, it would just ask you to use, the example below
``` bash Go
    for {
        this would iterate endlessly, unless you break the loop with the 
        break method
    }
```

# FUNCTIONS
Creating a funtion in Go is pretty simple, just start with the initial word,
``` bash Go
    func // just like ```bash Python def ```
``` 
this word would let the compiler no that we are creating a function here.
Example: func NameOfFunction() returnType{
    so we start with the initial word, followed by the nameOftheFunc bring our parenthesis, the now our return type. 
}

I tested my knowledge so far so build a quiz that give brings out only one question. i would try the quiz that bring out multiple questions.

