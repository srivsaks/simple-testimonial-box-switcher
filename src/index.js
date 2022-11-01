import "./styles.css";

const data = [
  {
    content:
      "For many of us, relaxation means flopping on the couch and zoning out in front of the TV at the end of a stressful day. But this does little to reduce the damaging effects of stress. Rather, you need to activate your body’s natural relaxation response, a state of deep rest that puts the brakes on stress, slows your breathing and heart rate, lowers your blood pressure, and brings your body and mind back into balance.",
    src:
      "https://plus.unsplash.com/premium_photo-1661767329669-2ff46c34fffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    author: "Rosy"
  },
  {
    content: `Did you know that using credit cards to pay on your UPI can help you improve your credit score?  Yes, it does.Your credit score is a key factor in determining your credit worth. Lenders seek this score before approving any kind of credit to you. The lending market does not stop at traditional loans and credit cards, it has now grown to instant loans, Buy Now Pay Later options, online overdraft facilities, and more. The primary benefit of paying through your UPI with your credit card is that it improves your credit utilization. When you use your credit card to make a payment, your credit utilization ratio improves. This in turn improves your credit score. So, prudently using your credit card with your UPI to boost your credit score is a great idea.or someone with a low credit score or a very young credit history, this facility gives more opportunities to use their credit card and build their credit score.Additional Read: 8 Smart Ways To Use A Credit Card Your Build Credit ScoreAnother advantage of using your credit card to pay through UPI is, you get a lot of discounts, rewards and cashbacks. For example, whenever you use a credit card on your UPI app to recharge your mobile phone, or pay for electricity bills, or any other bills & utility payments, you are assured of cashbacks and other discounts. This is an added incentive to link your credit card with your UPI app and start using it. Also, UPI has become so universal these days that most vendors, from your street side pan wallah to e-commerce giants, everybody accepts UPI. So, your credit card utilization ratio improves gradually, thus improving your credit score. A few disadvantages of using credit card with your UPIFor one, the payment app would charge a transaction fee for paying through credit card. This ranges anywhere from 0.5% - 2%. So if you are making a large transaction, your fee will also be a considerable amount. 
      You cannot use a credit card with UPI directly at merchant establishments. You are generally required to upload money to the payment app wallet, which is then used to pay at merchant locations. And payment apps again charge a transaction fee when you load money to their wallet using a credit card. That is a huge deterrent to people choosing to pay using a credit card with their UPI. You might end up spending more than you can repay due to the convenient nature of the payments. This may lead you into a debt trap if you are not prudent with your spending. `,
    src:
      "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    author: "Bella"
  }
];

const img = document.querySelector(".author-image");
const auth = document.querySelector(".author");
const testimonial = document.querySelector(".testimonial");

var indx = 0;
function updateData() {
  if (indx === 2) {
    indx = 0;
  }
  setTimeout(() => {
    const { content, src, author } = data[indx];
    img.src = src;
    auth.textContent = author;
    testimonial.textContent = content;
    indx++;
    updateData();
  }, 10000);
}
updateData();
