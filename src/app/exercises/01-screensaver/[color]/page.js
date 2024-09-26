import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';
import COLORS from "../../../../data";

function ScreenSaverExercise({params}) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color} />
    </main>
  );
}

export default ScreenSaverExercise;

export function generateStaticParams() {
  return COLORS.map((color) => {
    color;
  });
}
