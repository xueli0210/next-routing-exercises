import React from 'react';
import Link from 'next/link';

function pickColor() {
  return (
    <ul>
      Choose Your Color:
      <li>
        <Link href={"/exercises/01-screensaver/darkcyan"}>darkcyan</Link>
      </li>
      <li>
        <Link href={"/exercises/01-screensaver/lightpink"}>lightpink</Link>
      </li>
      <li>
        <Link href={"/exercises/01-screensaver/maroon"}>maroon</Link>
      </li>
      <li>
        <Link href={"/exercises/01-screensaver/darkorange"}>darkorange</Link>
      </li>
    </ul>
  );
}

export default pickColor;
