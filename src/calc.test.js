const test = require('tape'); // assign the tape library to the variable "test"
const calculateChange = require('../lib/change-calculator.js');  // require the calculator module

// test('calculateChange(215, 300) should return [50, 20, 10, 5]', function (t) {
//   const result = calculateChange(215, 300); // expect an array containing [50,20,10,5]
//   const expected = [50, 20, 10, 5];
//   t.deepEqual(result, expected);
//   t.end();
// });

var person1 = { name: "Andy", age: 45 };
var person2 = { name: "Andy", age: 45 };
var person3 = { name: "Andy", age: "45" };

// test("calculateChange(486,600 should equal to [100,10,2,2]", function (assert) {
//   assert.plan(3);
//   const result = calculateChange(486, 600);
//   const expected = [100, 10, 2, 2]
//   assert.deepEqual(result, expected, "*****this should be equal!!!!");
//   assert.true(calculateChange(2, 3), "checking tape.truth ");
//   // assert.onFinish(console.log("before finish"));
//   assert.fail("print message when fail");
// })

function add(num1, num2) {
  try {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 + num2;
  }
  catch (err) {
    // console.log("@@@@@" + err);
    throw err;
  }
}
function throwMag() {
  return "expected value";
}

// test("calculateChange(486,600 should equal to [100,10,2,2]", function (assert) {
//   assert.plan(2);
//   assert.deepLooseEqual(person1, person3, "person 1 and person 2 are identical");
//   assert.true(person1, "is person one a truthy value?");
// })

function setup() {
  const html = "<p>Santosh<p>";
  // const htmlNode = document.createElement("")
  document.body.appendChild(html);
}

console.log(add(1, "Santosh"));
test("Checking the throw test", function (assert) {
  setup();
  assert.plan(2);
  assert.throws(function () { add(1, 2) }, throwMag(), "Error adding number to string");
  assert.ok(person1, "is person one a truthy value?");
})