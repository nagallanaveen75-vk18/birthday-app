import { useState, useEffect } from "react";
import "../styles/Letter.css";

const letter = `

Dear Ammu ❤️,

Before you read anything...

I just want you to smile. 😊

Because today is YOUR day.

And honestly...

I don't think a normal birthday message could ever describe how special you are to me.

So...

I decided to make you something a little different.

A tiny little world...

made only for you. ❤️

━━━━━━━━━━━━━━━━━━━━━━

First of all...

Happiest Birthday to the prettiest,
cutest,
sweetest,
and most adorable girl in my universe. 🎂❤️

(Yes... I know you're smiling already 😏)

Another year older...

But don't worry...

You're still as cute as the day I met you.

Maybe even cuter. 🤭💕

━━━━━━━━━━━━━━━━━━━━━━

I still don't understand one thing...

How can one person...

Be this cute...

This beautiful...

This annoying...

This caring...

This dramatic...

AND STILL make me miss her every single day?

Seriously...

Teach me your secret. 😂❤️

━━━━━━━━━━━━━━━━━━━━━━

Thank you...

For every smile you've given me.

For every late-night conversation.

For every little moment that slowly became one of my favorite memories.

You probably don't even realize how much happiness you've brought into my life.

And for that...

I'll always be grateful. ❤️

━━━━━━━━━━━━━━━━━━━━━━

Happy Birthday,

My Ammadi ❤️



I still fall for your smile every single day.

No matter how many times I see your smile❤️,


it still feels like the first time. ❤️

`;

function Letter({ onContinue }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

 useEffect(() => {
  if (index < letter.length) {
    const currentChar = letter[index];

    // Determine the typing speed based on punctuation
    const speed =
      currentChar === "." ||
      currentChar === "," ||
      currentChar === "!" ||
      currentChar === "?"
        ? 180
        : currentChar === "\n"
        ? 250
        : 28;

    const timer = setTimeout(() => {
      setDisplayed(letter.slice(0, index + 1));
      setIndex(index + 1);
    }, speed);

    return () => clearTimeout(timer);
  }
}, [index]);

  return (
    <div className="letter-page">

      <div className="paper">

        <h1>
          ❤️ A Letter From My Heart ❤️
        </h1>

        <pre>{displayed}</pre>

        {index >= letter.length && (
          <button onClick={onContinue}>
            ✨ Continue Our Story →
          </button>
        )}

      </div>

    </div>
  );
}

export default Letter;