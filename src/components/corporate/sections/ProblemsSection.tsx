export default function ProblemsSection() {
  const problems = [
    '考えていることがわからない、急に辞める',
    '本音で話してくれない',
    '丁寧に育成するリソースがない',
    '忍耐力がない、主体的に動かない',
    '飲み会に来ない',
  ];

  return (
    <section 
      id="problems" 
      className="w-full min-h-screen py-16 px-4 bg-white flex items-center justify-center md:py-20 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2C3E50] mb-6 leading-[1.3] md:text-4xl md:mb-8">
          Z世代にこんなお悩みありませんか？
        </h2>
        <div className="flex flex-col gap-6 items-center mb-6 md:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="w-full flex justify-center items-center">
              {problem}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center flex flex-col items-center gap-4 md:mt-12">
          <div className="text-[36px] text-[#517CA2] leading-none md:text-[48px]">
            ⇩
          </div>
          <p className="text-xl font-bold text-[#517CA2] m-0 md:text-[clamp(28px,3.5vw,48px)]">
            Naritaiがすべて解決します
          </p>
        </div>
      </div>
    </section>
  );
}



