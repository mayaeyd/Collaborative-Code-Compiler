export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    python: "3.10.0",
    csharp: "6.12.0",
  };
  
  export const codeSnippets = {
    javascript: `// JavaScript: Function to calculate the square of a number\n\
      function square(num) {\n\
    \treturn num * num;\n\
    }\n\
    console.log(square(5)); // Output: 25`,
  
    python: `# Python: Function to calculate the square of a number\n\
    def square(num):\n\
    \treturn num * num\n\
    \n\
    print(square(5))  # Output: 25`,
  
    csharp: `// C#: Function to calculate the square of a number\n\
    using System;\n\
    \n\
    class Program {\n\
    \tstatic int Square(int num) {\n\
    \t\treturn num * num;\n\
    \t}\n\
    \n\
    \tstatic void Main() {\n\
    \t\tConsole.WriteLine(Square(5)); // Output: 25\n\
    \t}\n\
    }`,
  };
  