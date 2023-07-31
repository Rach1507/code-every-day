import { useState } from "react";

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <p>
        Sharing State Between Components Sometimes, you want the state of two
        components to always change together. To do it, remove state from both
        of them, move it to their closest common parent, and then pass it down
        to them via props. This is known as lifting state up
      </p>
      <p>
        To coordinate these two panels, you need to “lift their state up” to a
        parent component in three steps: Remove state from the child components.
        Pass hardcoded data from the common parent. Add state to the common
        parent and pass it down together with the event handlers.
      </p>

      <p>
        "
        <Panel isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
          ...
        </Panel>
        <Panel isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
          ...
        </Panel>
        "
      </p>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
