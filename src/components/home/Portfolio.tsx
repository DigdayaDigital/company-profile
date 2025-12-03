import { MotionDiv } from '@/components/motion/MotionComponents';
import { PortfolioCarousel } from '@/components/client/PortfolioCarousel';

export function Portfolio() {
  return (
    <section id="portofolio" className="py-24 px-6 bg-linear-to-br from-orange-50 to-white relative overflow-hidden">
      <div className="container mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-4">Portofolio</h2>
          <p className="text-xl text-gray-600">Karya terbaik kami untuk klien</p>
        </MotionDiv>

        <PortfolioCarousel />
      </div>
    </section>
  );
}
