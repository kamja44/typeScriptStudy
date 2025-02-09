/**
 * Template Literal
 */

type CodeFactory = "Code Factory";

// UpperCase
type CodeFactoryUpper = Uppercase<CodeFactory>; // type CodeFactoryUpper = "CODE FACTORY"

// LowerCase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>; // type CodeFactoryLower = "code factory"

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>; // type CodeFactoryCapital = "Code factory"

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>; // type CodeFactoryUnCapital = "code factory"
