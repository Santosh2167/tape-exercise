const test = require('tape');

// import test from "tape";
// console.log("test page");

function appendHtml() {
  console.log("in appendhtml function");

  const html = `      <form onSubmit={(event) => this.onFormSubmit(event)} className="enquiry-form">
  <div className="name">
    <label>Name</label>
    <input type="text" placeholder="Name" className="nameTextbox" />
  </div>
  <div className="password">
    <label>Password</label>
    <input type="password" placeholder="password"></input>
  </div>
  <input type="submit" value="Click" className="button"></input>
</form >`;
  document.body.append = html;
  let
}

test("My First Test", (assert) => {
  appendHtml();
  assert.equal(1, 2, "Number 1 and 2 are same");
  assert.end;
})


// const test = require('tape'); // assign the tape library to the variable "test"

// test('should return -1 when the value is not present in Array', function (t) {
//   t.equal(-1, [1, 2, 3].indexOf(4)); // 4 is not present in this array so passes
//   t.end();
// });

