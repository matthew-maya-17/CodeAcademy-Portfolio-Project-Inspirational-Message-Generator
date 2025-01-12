const subject = ["Your", "Our", "A winner[s]", "Leader[s]", "Champion[s]"];
const action = ["journey has only begun,", "opportunity come from enduring change", "success come from hardwork,", "can conquer any obstacle", "should believe in your/their journey", "should believe in your/their journey"];
const motivation = ["and seen but a glimpse.", "when the hard road is often the less taken.", "with patience and effort", "by taking one step at a time"];

let motivationGenerator = (subject, action, motivation) => {
    let subjectChosen = subject[Math.floor(Math.random() * subject.length)];
    let actionChosen = action[Math.floor(Math.random() * action.length)];
    let motivationChosen = motivation[Math.floor(Math.random() * motivation.length)];

    console.log(`Subject Chosen #: ${subjectChosen}`);
    console.log(`Subject Chosen #: ${actionChosen}`);
    console.log(`Subject Chosen #: ${motivationChosen}`);
    return `${subjectChosen} ${actionChosen} ${motivationChosen}`
}

console.log(motivationGenerator(subject, action, motivation));