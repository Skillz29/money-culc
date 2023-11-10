// преобразуем строку в число
export const convertStringNumber = (str) => {
  // Убираем пробелы
  const noSpaceStr = String(str).replace(/\s+/g, '');
  // Получаем число
  const num = parseFloat(noSpaceStr);
  // Проверяем что пришло число и что это число конечное
  if (!isNaN(num) && isFinite(num)) {
    return num
  }

  else {
    return false
  }
};

// дата
export const reformatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`
};

// анимация
export const animationNumder = (element, number) => {
  const fps = 60;
  const duration = 1500;
  const frameDuration= duration / fps;
  const totalFrame = Math.round(duration / frameDuration);

  let currentFrame = 0;

  const initialNumber = parseInt(element.textContent.replace(/[^0-9.-]+/g,''));

  const increment = Math.trunc((number - initialNumber) / totalFrame);


  const intervalId = setInterval(() => {
    currentFrame += 1;

    const newNumber = initialNumber + increment * currentFrame;

    element.textContent = `${newNumber.toLocaleString('Ru-ru')} ₽`;

    if(currentFrame === totalFrame) {
      clearInterval(intervalId);
      element.textContent = `${newNumber.toLocaleString('Ru-ru')} ₽`;
    }
  }, frameDuration);

}
