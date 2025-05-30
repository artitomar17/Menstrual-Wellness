const chatBox = document.getElementById("chat-box");

function handleUserInput() {
  const inputField = document.getElementById("user-input");
  const input = inputField.value.trim();
  if (!input) return;

  appendMessage("You", input);
  inputField.value = "";

  const response = getBotResponse(input.toLowerCase());
  setTimeout(() => appendMessage("Bot", response), 500);
}

function getBotResponse(input) { input = input.toLowerCase();

if (input.includes("what is a period") || input.includes("what are periods")) { return "A period is the monthly shedding of the uterine lining, which results in bleeding from the vagina."; } else if (input.includes("why do girls have periods")) { return "Girls have periods as part of the reproductive cycle, which prepares the body for a potential pregnancy."; } else if (input.includes("how long does a period usually last")) { return "A typical period lasts between 3 to 7 days."; } else if (input.includes("normal cycle length")) { return "A normal menstrual cycle is usually between 21 to 35 days."; } else if (input.includes("first period")) { return "Girls usually get their first period between ages 9 and 16. It's called menarche."; } else if (input.includes("skip a period")) { return "Skipping a period occasionally is common and can be due to stress, weight changes, or health conditions.";

} else if (input.includes("cramps")) { return "Cramps are caused by uterine contractions. Heat pads, hydration, and light exercise can help."; } else if (input.includes("tired during period")) { return "Fatigue during periods is normal due to hormonal changes and blood loss. Rest and good nutrition help."; } else if (input.includes("diarrhea") || input.includes("constipation")) { return "Hormones can affect digestion during your period, causing diarrhea or constipation."; } else if (input.includes("nausea")) { return "Nausea is a common PMS symptom caused by hormonal shifts.";

} else if (input.includes("moody") || input.includes("emotional")) { return "Mood swings before a period are caused by hormonal changes. It's known as PMS."; } else if (input.includes("pms")) { return "PMS stands for Premenstrual Syndrome. It includes emotional and physical symptoms before a period."; } else if (input.includes("anxiety")) { return "Anxiety before periods is common due to hormonal fluctuations. Mindfulness and rest can help.";

} else if (input.includes("late period") || input.includes("period late")) { return "Late periods can be due to stress, illness, weight changes, or pregnancy."; } else if (input.includes("irregular")) { return "Irregular periods may be caused by PCOS, stress, thyroid issues, or significant lifestyle changes."; } else if (input.includes("twice in a month")) { return "Bleeding twice a month could be hormonal or due to a short cycle. A doctor can provide clarity.";

} else if (input.includes("heavy flow") || input.includes("heavy than usual")) { return "Heavy flow can be due to hormonal imbalance, fibroids, or lifestyle. It's usually normal and can occur sometimes. See a doctor if concerned."; } else if (input.includes("light period")) { return "A light period is usually not a concern unless it changes suddenly. It could be due to stress or diet."; } else if (input.includes("clots")) { return "Blood clots during periods are common, but if they're large or frequent, consult a doctor.";

} else if (input.includes("change pad") || input.includes("How often should I change the tampons")) { return "Change your pad, tampons or any other menstrual product in every 4 to 6 hours to maintain hygiene."; } else if (input.includes("tampon safe")) { return "Yes, tampons are safe when used correctly and changed every 4-8 hours."; } else if (input.includes("menstrual cup")) { return "Menstrual cups are eco-friendly, safe, and can be worn up to 12 hours."; } else if (input.includes("swim")) { return "Yes, you can swim during your period using tampons or menstrual cups."; } else if (input.includes("rashes")) { return "Rashes from pads can be avoided by changing regularly and using unscented products.";

} else if (input.includes("eat during period")) { return "Eat iron-rich and hydrating foods during your period to feel better."; } else if (input.includes("coffee during period")) { return "Limit caffeine during your period as it can worsen cramps and bloating."; } else if (input.includes("exercise during period")) { return "Light exercise like walking or yoga can relieve cramps and improve mood during periods.";

} else if (input.includes("track my period")) { return "You can track your cycle using apps like Clue, Flo, or manually on a calendar."; } else if (input.includes("why track")) { return "Tracking helps predict your next period, ovulation, and understand your cycle better.";

} else if (input.includes("pregnant during period")) { return "It's very unlikely but not impossible to get pregnant during your period."; } else if (input.includes("period stop and come back")) { return "This could be due to hormonal fluctuations. It's common and usually not serious."; } else if (input.includes("ovulation")) { return "Ovulation is the release of an egg from the ovary, usually around day 14 of a 28-day cycle.";

} else if (input.includes("pcos")) { return "PCOS stands for Polycystic Ovary Syndrome. It affects hormones and can disrupt periods."; } else if (input.includes("thyroid")) { return "Yes, thyroid disorders can cause period irregularities."; } else if (input.includes("endometriosis")) { return "Endometriosis is when tissue like the uterine lining grows outside the uterus, causing pain and heavy bleeding.";

} else if (input.includes("school") || input.includes("college")) { return "It's okay to go to school or college during your period. Just take care and stay prepared."; } else if (input.includes("travel")) { return "Carry supplies and pain relief if needed while traveling during your period.";

} else if (input.includes("first time period")) { return "Stay calm, use a pad, and talk to a trusted adult. It's a normal part of growing up."; } else if (input.includes("does it hurt")) { return "The period itself doesn't hurt, but cramps may occur. They can be managed with care."; } else if (input.includes("products for first period")) { return "Pads are the easiest for first periods. Later, you can explore other options like cups or tampons.";

} else if (input.includes("period smell")) { return "Mild odor is normal. Strong smell may indicate infection. Maintain hygiene."; } else if (input.includes("black blood")) { return "Dark or black blood is old blood and is generally harmless."; } else if (input.includes("spotting")) { return "Spotting between periods could be hormonal or due to other reasons. Monitor and consult if frequent.";

} else if (input.includes("birth control")) { return "Birth control can change your cycle. It's best to ask a doctor for specific guidance."; } else if (input.includes("emergency pill")) { return "Emergency contraception can delay or affect your next period. This is normal for a short time.";

} else if (input.includes("dysmenorrhea")) { return "Dysmenorrhea is painful menstruation, common among teens and young women."; } else if (input.includes("amenorrhea")) { return "Amenorrhea is the absence of menstruation. It may need medical evaluation if persistent."; } else if (input.includes("menorrhagia")) { return "Menorrhagia is abnormally heavy or prolonged bleeding. Please consult a doctor.";

} else if (input.includes("culture") || input.includes("temple")) { return "Beliefs about menstruation vary by culture. Scientifically, there's no harm in continuing daily life.";

} else if (input.includes("when see doctor")) { return "See a doctor if your periods are extremely painful, irregular, or suddenly change."; } else if (input.includes("3 months")) { return "Missing your period for 3 months should be evaluated by a healthcare provider."; } else if (input.includes("covid")) { return "Some people reported changes in their periods after COVID-19. It's being studied."; } else if (input.includes("weight loss")) { return "Rapid weight loss can affect hormones and lead to missed or irregular periods.";

} else if (input.includes("reusable pad")) { return "Reusable pads are safe if washed and dried properly after each use."; }
 else if (input.includes("period underwear")) { return "Period underwear is absorbent and reusable. It's a comfortable alternative to pads."; } else if (input.includes("dispose pad")) { return "Wrap used pads in paper and throw them in a trash bin. Don't flush them.";

}else if (input.includes("hello") || input.includes("hii") || input.includes("can i ask about periods") || input.includes("can we talk about periods")) { return "Hello there, I am here to help with your periods doubt, go ahead :) "; }
 else { return "I'm here to help with your menstrual health questions! Try asking about symptoms, hygiene, or cycle details."; }} 





function appendMessage(sender, message) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong>${message}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}