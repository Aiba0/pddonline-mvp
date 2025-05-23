const AdvantageBlock = ({ title, subtitle, desc, img, imgLeft }) => (
    <section id="whyus" className={`w-full flex justify-center py-8 md:py-16 `}>
        <div
            className={`w-full max-w-6xl px-4 md:px-8 flex flex-col md:flex-row ${imgLeft ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
            <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#1769E0]">{title}</h3>
                <div className="text-lg font-semibold mb-2 text-gray-900">{subtitle}</div>
                <div className="text-gray-700">{desc}</div>
            </div>

            <div className="flex-1 flex justify-center mb-6 md:mb-0">
                <img
                    src={img}
                    alt={title}
                    className="rounded-2xl shadow-lg max-w-[350px] md:max-w-[420px] w-full object-contain"
                />
            </div>
        </div>
    </section>
);

export default AdvantageBlock;
