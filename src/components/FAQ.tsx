import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Why are people excited about this presale?",
      answer:
        "In 2023 and 2024, coins like $PEPE, $WIF, and $VIRTUAL launched with zero fanfare and turned early buyers into millionaires practically overnight. In 2025, Bitcoin's hitting new all-time highs and the appetite for gains is bigger than ever. If you want a shot at 100x, you need more than just hype, you need a gem the market hasn't fully priced in.",
    },
    {
      question: "How do I participate in the presale?",
      answer: "Simply select your preferred cryptocurrency (BTC, ETH, XRP, or SOL), enter the amount you want to invest, and follow the payment instructions. You'll receive your tokens directly to your wallet.",
    },
    {
      question: "What cryptocurrencies are accepted?",
      answer: "We accept Bitcoin (BTC), Ethereum (ETH), XRP, and Solana (SOL) for maximum convenience and accessibility.",
    },
    {
      question: "When will tokens be distributed?",
      answer: "Tokens will be distributed automatically within 24 hours of confirmed payment. You'll receive an email confirmation once the distribution is complete.",
    },
    {
      question: "Is there a minimum investment amount?",
      answer: "Yes, the minimum investment is $100 USD equivalent in any supported cryptocurrency. There's no maximum limit.",
    },
    {
      question: "Are there any bonuses for early investors?",
      answer: "Yes! Early investors receive a 20% bonus on all purchases during the presale period. Additional bonuses may apply for larger investments.",
    },
    {
      question: "Is the smart contract audited?",
      answer: "Yes, our smart contracts have been audited by leading blockchain security firms. All audit reports are available on our website.",
    },
    {
      question: "What happens if the presale target isn't reached?",
      answer: "If the minimum target isn't reached, all investments will be refunded automatically to the original wallet addresses.",
    },
    {
      question: "Can I get a refund?",
      answer: "Due to the nature of cryptocurrency transactions, refunds are only available if the presale doesn't meet its minimum target or in case of technical issues.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our presale
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-md border-primary/20 shadow-[var(--shadow-card)]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;