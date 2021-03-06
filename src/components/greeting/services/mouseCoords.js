export const mouseCoords = (posX, posY) => {
  let scrollY = window.scrollY;

  if (scrollY < (2 * window.innerHeight) / 3) {
    const origenX = window.innerWidth / 2;
    const origenY = window.innerHeight / 2;
    const coordX = posX - origenX;
    const coordY = origenY - posY;

    return { coordX, coordY };
  }

  return { coordX: 0, coordY: 0 };
};
