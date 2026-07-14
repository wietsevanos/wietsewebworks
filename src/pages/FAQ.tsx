import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does TCF Orange offer?",
    answer:
      "TCF Orange provides specialised financial advisory for commodity traders, including structured trade finance, risk management, marine cargo insurance support and professional claims handling.",
  },
  {
    question: "How can TCF Orange help me manage risk?",
    answer:
      "We analyse transaction and operational exposure within commodity trading structures and implement targeted risk mitigation strategies, including insurance optimisation and claims recovery to protect margins and capital.",
  },
  {
    question: "What makes TCF Orange different from other financial advisors?",
    answer:
      "Our expertise is fully focused on the commodity trading sector. We combine trade finance knowledge with hands on insurance and claims experience, allowing us to deliver practical, transaction driven solutions rather than generic financial advice.",
  },
  {
    question: "How does TCF Orange charge for its services?",
    answer:
      "Our fee structures are tailored to each engagement. For project-based work such as facility structuring or claims handling, we typically agree fixed or capped fees. For ongoing advisory relationships or interim roles, we offer retainer or day-rate arrangements. We're always transparent about costs before commencing work.",
  },
  {
    question: "Can you work alongside our existing bank relationships?",
    answer:
      "Absolutely. We're designed to enhance, not replace, your banking relationships. We work collaboratively with your relationship banks, helping to structure facilities that meet both your needs and their credit requirements. Our involvement typically improves dialogue and outcomes.",
  },
  {
    question: "What's your approach to insurance claims?",
    answer:
      "We approach claims strategically and persistently. This means thorough documentation, clear coverage analysis, professional adjuster management and firm negotiation when required. We understand insurer tactics and how to counter them effectively while maintaining professional relationships.",
  },
  {
    question: "Do you provide legal advice?",
    answer:
      "While Christiaan has a legal background, TCF Orange provides commercial advisory services rather than formal legal advice. For matters requiring legal opinions or litigation, we work alongside qualified law firms, providing commercial context and coordination.",
  },
  {
    question: "How quickly can you mobilise for a new engagement?",
    answer:
      "We maintain flexibility to respond quickly when needed. For urgent matters such as active claims or transaction issues, we can typically begin work within days. For larger projects, we'll discuss timeline and resource requirements during initial conversations.",
  },
  {
    question: "What geographical areas do you cover?",
    answer:
      "Based in Amsterdam, we primarily serve clients in Europe. However, commodity trade finance is inherently international, and we regularly work on matters involving banks and counterparties across major trading centres worldwide.",
  },
  {
    question: "Can you help with banking relationships during difficult times?",
    answer:
      "Yes, this is often when our involvement is most valuable. We help trading companies navigate challenging conversations with banks, whether related to covenant breaches, facility renewals during difficult markets or credit line pressure. Our experience enables pragmatic solutions.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <PageHeader
        label="Questions"
        title="FAQ"
        description="Common questions about our services, approach and how we work with clients."
        backgroundImage="/images/faq-header-bg-v2.png"
      />

      {/* FAQ Accordion */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0 rounded-lg bg-muted/30 px-6 data-[state=open]:bg-primary/5 data-[state=open]:ring-1 data-[state=open]:ring-primary/20 transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-[0.9375rem] gap-4 [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5">
                    <span className="flex items-center gap-3">
                      <span className="w-1 h-5 rounded-full bg-primary/60 group-data-[state=open]:bg-primary transition-colors" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-4 text-[0.9375rem]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 dark-section relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/faq-silver-bg.png')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background-dark/50" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
              Have other questions?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              We're happy to discuss your specific situation and how TCF Orange
              might be able to help.
            </p>
            <Link
              to="/message"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
