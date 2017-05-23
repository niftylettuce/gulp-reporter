'use strict';

const msg = {
	"'hasOwnProperty' is a really bad name.": "不應使用'hasOwnProperty'作為名字",
	"'with' is not allowed in strict mode.": "'with' 不允許在嚴格模式下使用",
	"'{a}' has already been declared.": "'{a}' 已宣告",
	"'{a}' is a statement label.": "'{a}' 是宣告標籤",
	"'{a}' is already defined in outer scope.": "'{a}'已經在外部作用域定義",
	"'{a}' is already defined.": "'{a}'已經定義過了",
	"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz).": "'{a}'只能在ES{b}或Mozilla JS擴充套件中使用。如果需要請使用選項 'esversion: {b}'或'moz'",
	"'{a}' is defined but never used.": "'{a}'被定義以後，從未使用過",
	"'{a}' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.": "'{a}' 在未來版本的JavaScript中已被定義。應換一個不同的變數名，以避免升級問題",
	"'{a}' is not a statement label.": "'{a}'不是一個語句標籤",
	"'{a}' is not allowed.": "'{a}' 不是允許的",
	"'{a}' is not defined.": "'{a}'未定義",
	"'{a}' is only available in ES{b} (use 'esversion: {b}').": "'{a}'只能在ES{b}中使用。如果需要請使用選項 'esversion: {b}'",
	"'{a}' is only available in Mozilla JavaScript extensions (use moz option).": "'{a}'只能在Mozilla JS擴充套件中使用。如果需要請使用選項 'moz'",
	"'{a}' must be in function scope.": "'{a}'必須在函式的內部使用",
	"'{a}' used out of scope.": "'{a}' 在作用域外使用",
	"'{a}' was used before it was declared, which is illegal for '{b}' variables.": "使用'{a}'前未宣告，這是非法的'{b}'變數",
	"'{a}' was used before it was defined.": "'{a}'使用前未定義",
	"['{a}'] is better written in dot notation.": "不應使用['{a}']，請使用'.{a}'",
	'`var` declarations are forbidden. Use `let` or `const` instead.': '已禁用`var`宣告，應該用`let`或`const`代替',
	'A constructor name should start with an uppercase letter.': '建構函式的名稱應以大寫字母開頭',
	'A dot following a number can be confused with a decimal point.': '數字後面的一個點會被誤認為是十進位制的小數點',
	'A generator function shall contain a yield statement.': 'Generator函式至少應該有一個yield語句',
	"A leading decimal point can be confused with a dot: '{a}'.": "'{a}'容易與前置小數點的寫法發生語義歧義",
	"A regular expression literal can be confused with '/='.": "'/=' 會與正則表示式產生語義歧義",
	"A trailing decimal point can be confused with a dot: '{a}'.": '小數點的位置可能會產生歧義{a}',
	'A yield statement shall be within a generator function (with syntax: `function*`)': 'yield 語句應內一個生成器函式內(用`function*`語法)',
	"A {a} cannot be named '{b}'.": "{a}不能命名為'{b}'",
	"Attempting to override '{a}' which is a constant.": "試圖重寫'{a}'這是一個常量",
	'Avoid arguments.{a}.': '不應使用arguments.{a}, 會讓js引擎效率降低10倍',
	'Avoid EOL escaping.': '應避免使用行結尾轉義',
	'Avoid {a}.': '不應使用{a}',
	'Bad assignment.': '錯誤的賦值',
	'Bad constructor.': '錯誤的建構函式',
	'Bad escaping of EOL. Use option multistr if needed.': '錯誤的行結尾轉義。如果需要請使用選項 multistr',
	'Bad invocation.': '錯誤的呼叫',
	"Bad line breaking before '{a}'.": '不應在’{a}’之前換行',
	"Bad number '{a}'.": "錯誤的數字'{a}'",
	'Bad operand.': '錯誤的運算元',
	'Bad option value.': '錯誤的選項值',
	"Bad option: '{a}'.": "錯誤的選項: '{a}'",
	'Bad or unnecessary escaping.': '錯誤或不必要的轉義',
	'Blocks are nested too deeply. ({a})': '塊巢狀太深。({a})',
	"Class properties must be methods. Expected '(' but instead saw '{a}'.": "類的屬性必須是函式。應該用'('而非'{a}'",
	"Comma warnings can be turned off with 'laxcomma'.": "Comma warnings can be turned off with 'laxcomma'.",
	'Confusing minuses.': '語義不清晰的負數表達+',
	'Confusing plusses.': '語義不清晰的正數表達+',
	"Confusing use of '{a}'.": "語義不清晰的使用 '{a}'",
	"const '{a}' is initialized to 'undefined'.": "const '{a}'不應初始化為 undefined",
	'Control character in string: {a}.': '字串中不該有控制字元: {a}',
	"Creating global 'for' variable. Should be 'for (var {a} ...'.": "不該建立全域性var 變數。應該寫'for (var ...'",
	'Did you mean to return a conditional instead of an assignment?': '不應在返回值的同時賦值',
	'Do not assign to the exception parameter.': '不應覆蓋異常引數',
	"Do not use 'new' for side effects.": "不應使用 'new' 語句",
	'Do not use {a} as a constructor.': '不應用{a}作為建構函式',
	'document.write can be a form of eval.': 'document.write是eval的另一種形式',
	"Don't make functions within a loop.": '不要在迴圈內部宣告函式',
	"Don't use 'with'.": "不要用'with'，太耗js引擎資源了",
	"Don't use extra leading zeros '{a}'.": "不應使用額外前導0'{a}'",
	"Duplicate {a} '{b}'.": "{a}與'{b}'重複",
	'Each value should have its own case label.': '每個值都應有其自己的case標籤',
	'Empty array elements require elision=true.': '空陣列隱式=true',
	'Empty block.': '空的模組',
	'Empty destructuring.': '空的解構賦值',
	'ES5 option is now set per default': 'ES5 option is now set per default',
	'eval can be harmful.': 'eval is evil. eval是惡魔，千萬遠離他！！',
	"Expected '{a}' and instead saw '{b}'.": "應該為'{a}'，而非'{b}'",
	"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.": "'{a}'應該與{c}行的'{b}'匹配，但卻與'{d}'匹配",
	"Expected a 'break' statement before '{a}'.": "'{a}'之前應有一個'break'語句。考慮使用`/* falls through */`",
	'Expected a conditional expression and instead saw an assignment.': '應為條件表示式，而非賦值',
	'Expected a JSON value.': '應該是一個JSON值',
	'Expected a single parameter in set {a} function.': 'set {a}函式應該只有一個引數',
	"Expected a small integer or 'false' and instead saw '{a}'.": "此處應為小整數或false，而非'{a}'",
	'Expected a string and instead saw {a}.': '應為一個字串，而非{a}',
	'Expected an assignment or function call and instead saw an expression.': '應該是賦值或者函式呼叫，而非表示式',
	"Expected an identifier and instead saw '{a}' (a reserved word).": "應為賦值語句識別符號，而非'{a}'(保留的字)",
	"Expected an identifier and instead saw '{a}'.": "應為識別符號，而非'{a}'",
	'Expected an identifier in an assignment and instead saw a function invocation.': '應為賦值語句識別符號，而非一個函式呼叫',
	"Expected an operator and instead saw '{a}'.": "此處應為運算子，而非'{a}'",
	'Expected to see a statement and instead saw a block.': '此處應為宣告語句而非塊語句',
	'Export declaration must be in global scope.': 'export命令必須處於全域性作用域',
	"Extending prototype of native object: '{a}'.": "不該擴充套件原生物件的原型: '{a}'",
	'Extra comma. (it breaks older versions of IE)': '多餘的逗號(IE 5\\6\\7 下會報錯)',
	"Forgotten 'debugger' statement?": "是否忘記了宣告'debugger'？",
	'Function declarations are not invocable. Wrap the whole function invocation in parens.': '此處是函式宣告而不是呼叫。應該用括號包裹整個函式',
	'Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.': '函式的宣告不應該放置在塊內。應使用函式表示式或將宣告語句移到外層函式的頂部',
	'get/set are ES5 features.': 'get/set 是ES5的功能',
	"Identifier '{a}' is not in camel case.": "識別符號'{a}'應該使用駝峰命名法",
	'Illegal comma.': '非法的逗號',
	'Implied eval. Consider passing a function instead of a string.': 'eval的另一種形式。應該傳遞函式而不是字串',
	"Incompatible values for the '{a}' and '{b}' linting options.": "'{a}'和'{b}'是不相容的語法分析選項",
	'Inner functions should be listed at the top of the outer function.': '內部函式的宣告應該放在外部函式的頂部',
	'Input is empty.': '輸入為空',
	'Input is neither a string nor an array of strings.': '輸入是既不是一個字串，也不是一個字串陣列',
	'Invalid element after rest element.': 'rest元素後，不得再寫新的元素',
	'Invalid for each loop.': '無效的 for each 迴圈',
	'Invalid for-{a} loop left-hand-side: {b}.': 'Invalid for-{a} loop left-hand-side: {b}.',
	"Invalid meta property: '{a}.{b}'.": "無效的元素屬性' {a}.{b}'.",
	'Invalid parameter after rest parameter.': 'rest引數後，不得再寫新的引數',
	'Invalid regular expression.': '無效正則表示式',
	"Invalid typeof value '{a}'": "無效的typeof值 '{a}'",
	"It's not necessary to initialize '{a}' to 'undefined'.": "'{a}'不應要初始化為undefined",
	'JavaScript URL.': 'JavaScript URL',
	"Label '{a}' on {b} statement.": "標籤 '{a}' 在 {b} 宣告",
	"Line breaking error '{a}'.": "換行錯誤'{a}'",
	'Line is too long.': '行超長',
	'Math is not a function.': 'Math不是一個函式',
	"Missing '()' invoking a constructor.": "使用建構函式時丟掉了'()'",
	"Missing ':' on a case clause.": "case語句中丟掉了':'",
	"Missing ']' to match '[' from line {a}.": "{a}行的'['缺失了與之匹配的']'",
	"Missing 'new' prefix when invoking a constructor.": "使用建構函式時，丟掉了'new'命令",
	"Missing '{a}'.": '{a}丟失',
	"Missing '}' to match '{' from line {a}.": "{a}行的'{'缺失了與之匹配的'}'",
	'Missing "use strict" statement.': '缺少 "use strict"宣告',
	'Missing name in function declaration.': '宣告函式時丟失了函式名',
	'Missing property name.': '缺少屬性名稱',
	'Missing radix parameter.': '丟失了基數跟引數，請用`parseInt("10", 10)`形式',
	'Missing semicolon.': '缺少分號',
	'Mixed double and single quotes.': '不得混用雙引號和單引號，請統一',
	'Mozilla requires the yield expression to be parenthesized here.': '此處Mozilla要求yield表達要帶圓括號',
	'null': null,
	'Octal literals are not allowed in strict mode.': '嚴格模式下不允許控制字元{a}',
	"Option 'validthis' can't be used in a global scope.": "選項'validthis'不能使用在全域性範圍內使用",
	'Possible strict violation.': '可能違反嚴格模式',
	'Read only.': '只讀屬性',
	"Reassignment of '{a}', which is is a {b}. Use 'var' or 'let' to declare bindings that may change.": "不應為{a}賦值，這是一個{a}應var或'let'來宣告才能改變變數值",
	"Redefinition of '{a}'.": "重新定義了'{a}'",
	'Regular parameters should not come after default parameters.': '常規引數不應該放在定義了預設值的引數之後',
	'Script URL.': '不得使用 Script URL',
	'Setter is defined without getter.': '定義了Setter，但未定義getter.',
	'Stopping.': '正在停止',
	'Strict violation.': '違反嚴格模式',
	'Strings must use doublequote.': '字串必須使用雙引號',
	'Strings must use singlequote.': '字串必須使用單引號',
	"The '{a}' key may produce unexpected results.": "'{a}'鍵可能會產生意外的結果",
	"The '{a}' option cannot be set after any executable code.": "在選項'{a}'後無法設定任何可執行程式碼",
	"The '{a}' option is only available when linting ECMAScript {b} code.": "選項'{a}'僅可在ECMAScript {b}程式碼程式碼中使用",
	"The '{a}' property is deprecated.": "'{a}'屬性使用了禁用的寫法",
	'The array literal notation [] is preferable.': '陣列應使用[]表示',
	'The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.': 'for in的迴圈體內部，應該包裹一個if判斷語句，用以過濾掉從原型中繼承的成員',
	'The Function constructor is a form of eval.': 'Function的建構函式是eval的另一種形式',
	'The object literal notation {} is preferable.': '物件應使用{}表示',
	'This character may get silently deleted by one or more browsers.': '這個特徵可能會被一個或多個瀏覽器自動刪除',
	'This function has too many parameters. ({a})': '此函式的引數過多 ({a})',
	'This function has too many statements. ({a})': '此函式的宣告過多 ({a})',
	"This function's cyclomatic complexity is too high. ({a})": '這個函式的圈複雜度過高。({a})',
	'This line contains non-breaking spaces: http://jshint.com/docs/options/#nonbsp': '此行含有“不換行空格”，此種字元由Mac下敲入，有可能造成詭異的bug',
	'Too many errors.': '錯誤過多',
	'Unbegun comment.': '開頭未關閉的註釋',
	'Unclosed comment.': '未關閉的註釋',
	'Unclosed regular expression.': '未關閉的正則表示式',
	'Unclosed string.': '未關閉的字串',
	'Unclosed template literal.': '未關閉的模板字串',
	"Unexpected '{a}'.": "意外'{a}'",
	"Unexpected /*member '{a}'.": "不用使用 /* 成員 '{a}'",
	'Unexpected comma.': '不應該為逗號',
	'Unexpected control character in regular expression.': '正則表示式不應使的控制字元',
	'Unexpected early end of program.': '意外的過早結束程式',
	"Unexpected escaped character '{a}' in regular expression.": "正則表示式中不應使用轉義字元'{a}'",
	"Unexpected parameter '{a}' in get {b} function.": 'get {b}函式不應該有引數',
	"Unexpected use of '{a}'.": "不應該使用'{a}'",
	'Unexpected use of a comma operator.': '不應使用逗號操作符',
	"Unexpected {a} in '{b}'.": "不該在'{b}'中使用{a}",
	"Unmatched '{a}'.": "不匹配的 '{a}'",
	'Unnecessary directive "{a}".': "不必要的指令 '{a}'",
	'Unnecessary grouping operator.': '不應使用分組操作符',
	'Unnecessary semicolon.': '不必要的分號',
	"Unreachable '{a}' after '{b}'.": "在'{b}'之後無法訪問'{a}'",
	'Unrecoverable syntax error.': '不可恢復的語法錯誤',
	"Use '{a}' to compare with '{b}'.": "應利用'{a}' 與 '{b}'比較",
	'Use the function form of "use strict".': '應在函式內使用"use strict"',
	'Use the isNaN function to compare with NaN.': '應使用isNaN函式來比較NaN',
	"Value of '{a}' may be overwritten in IE 8 and earlier.": "變數'{a}'的值可能會在IE(<=8)中被覆蓋",
	'Variables should not be deleted.': '變數不能被刪除',
	"Weird construction. Is 'new' necessary?": "奇怪的建構函式。無法確認'new'是否必要的",
	'Wrap an immediate function invocation in parens to assist the reader in understanding that the expression is the result of a function, and not the function itself.': '應該用括號包裹立即執行函式以便讀者理解表示式是一個函式的結果，而不是函式本身',
	'Wrapping non-IIFE function literals in parens is unnecessary.': '不應使用括號包裹非立即執行函式',
	'You might be leaking a variable ({a}) here.': '這裡可能洩漏一個變數({a})',
	'{a} declaration not directly within block.': '{a}不應直接在塊內宣告',
	'{a} may not be supported by non-browser environments.': "'{a}'可能不支援非瀏覽器環境",
};

module.exports = function(error) {
	const message = error.raw && msg[error.raw];
	if (message) {
		error.message = message.replace(/\{\s*(\w+)\s*\}/g, (s, key) => {
			return error[key] || s;
		});
	}
	return error;
};