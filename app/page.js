import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Reality from '@/components/Reality'
import Definition from '@/components/Definition'
import Output from '@/components/Output'
import Proof from '@/components/Proof'
import CtaSection from '@/components/CtaSection'
import FormSection from '@/components/FormSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Reality />
      <Definition />
      <Output />
      <Proof />
      <CtaSection />
      <FormSection />
      <Footer />
    </main>
  )
}
