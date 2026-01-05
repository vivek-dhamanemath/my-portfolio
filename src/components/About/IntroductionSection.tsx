export default function IntroductionSection() {
    return (
        <div className="flex flex-col gap-12">
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Introduction</h2>
                <div className="font-sans text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400 flex flex-col gap-6 text-justify">
                    <p>
                        I am a results-driven <span className="text-zinc-900 dark:text-zinc-100 font-medium">Software Developer</span> and MCA graduate dedicated to architecting scalable, high-performance web applications. My expertise lies in bridging the complexity of backend systems with the elegance of modern frontend interfaces, primarily utilizing <span className="text-zinc-900 dark:text-zinc-100 font-medium">Java, Spring Boot, and React</span>.
                    </p>
                    <p>
                        With a deep focus on clean code and user-centric design, I specialize in transforming complex business requirements into intuitive digital experiences. I am passionate about continuous learning and stay at the forefront of emerging technologies to build solutions that are not just functional, but future-proof.
                    </p>
                    <p>
                        Currently, I am seeking opportunities to contribute my technical proficiency and problem-solving mindset to a forward-thinking engineering team where I can drive meaningful impact through code.
                    </p>
                </div>
            </section>
        </div>
    );
}
