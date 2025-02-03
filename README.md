EarthAI - AI EarthHack Project 🌍🤖

Overview

EarthAI is an AI-powered solution designed to evaluate Circular Economy proposals. It processes problem-solution datasets, categorizes them into circular economy loops, and scores them based on business viability, market impact, and sustainability factors. Built using OpenAI’s GPT-4, Pandas, and data preprocessing techniques, this project provides structured insights for venture capitalists, investors, and sustainability experts.

Key Features 🚀

✔ Dataset Filtering: Filters solutions where the response contains at least 10 words.
✔ AI-Based Assessment: Uses GPT-4 to analyze and classify solutions based on:
	•	Solution Fit ✅: Whether the solution aligns with the stated problem.
	•	Circular Economy Fit 🔄: If the solution supports sustainability principles.
	•	Loop Classification 🔁: Assigns solutions to one of four sustainability loops:
1️⃣ Material Loop (Resource Efficiency)
2️⃣ Product & Energy Loop (Economic Sustainability)
3️⃣ Biosphere Loop (Environmental Conservation)
4️⃣ Social Loop (Community Impact)

✔ Business & Market Analysis 📊: AI generates structured ratings for:
	•	Risk Assessment (1-10)
	•	Market Size Estimation (1-10)
	•	Solution Innovativeness (1-10)
	•	Feasibility Analysis (1-10)
	•	Return on Investment (ROI in %)
	•	Scalability Evaluation (1-10)

✔ Ranking Mechanism 🎯: Assigns a final Loop Score to identify top solutions.

Installation & Setup 🛠️

1️⃣ Install Dependencies

pip install -r requirements.txt

2️⃣ Run the AI Model (Jupyter Notebook)

jupyter notebook aiearth4.ipynb

3️⃣ Run the Web App

For Flask:

python app.py

For Streamlit:

streamlit run app.py

Example Output 📊

Problem Statement	Solution	Risk	Market	ROI	Loop Score
Electronic waste recycling is inefficient	AI-powered e-waste sorting system	6	8	25%	7
Lack of incentives for plastic recycling	Deposit return scheme for plastics	5	7	30%	8
Short lifespan of consumer electronics	Modular repairable electronics	7	8	20%	9

Next Steps 🚀

✅ Enhance GPT-4 prompt tuning for better analysis.
✅ Improve UI with interactive filtering for investors and policymakers.
✅ Integrate real-time market data to assess sustainability impact.

Contributors 👥
	•	Sai Chakradhar

License 📝

This project is open-source under the MIT License.

🌟 Star & Fork the Repository!

If you find this project useful, don’t forget to ⭐ Star the repository and Fork it for your own experiments!
