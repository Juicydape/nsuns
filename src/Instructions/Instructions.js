import Separator from "../UI/Separator/Separator";
import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <section>
      <p>
        Wprowadź swoje maksy na jedno powtórzenie (1RM) w polach poniżej, twoje maksy
        treningowe (TM) zostaną obliczone jako 90% prawdziwego maksa. Każdego
        tygodnia zwiększaj ciężar wpisany w w/w polach jeżeli byłeś w stanie
        wykonać wszystkie zaplanowane powtórzenia. Ćwiczenia asystujące
        wykonywane są w zakresach serii / powtórzeń kulturystycznych i mogą być
        dostosowane do twoich potrzeb.
      </p>
      <Separator />
      <p>
        To, o ile zwiększysz swój maks treningowy zależy od twojego wyniku
        w serii <strong>1+</strong> danego dnia.
      </p>
      <p>Jeżeli wykonasz 0-1 powtórzenia - nie zwiększaj TM</p>
      <p>Jeżeli wykonasz 2-3 powtórzenia - zwiększ swój TM o 2,5kg</p>
      <p>Jeżeli wykonasz 4-5 powtórzenia - zwiększ swój TM o 2,5-5kg</p>
      <p>Jeżeli wykonasz więcej niż 5 powtórzenia - zwiększ swój TM o 5-7,5kg</p>
    </section>
  );
};

export default Instructions;
