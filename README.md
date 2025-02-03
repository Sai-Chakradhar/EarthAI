# EarthAI
AI EarthHack Project

Overview

This project is designed to analyze and evaluate Circular Economy solutions using AI-driven assessment. It processes a dataset of proposed solutions, categorizes them into different circular economy loops, and scores them based on various business and sustainability factors. The implementation leverages OpenAI’s GPT-4, Pandas, and data preprocessing techniques to generate structured insights.

Key Features
	•	Dataset Filtering: Filters problem-solution pairs where the solution contains at least 10 words.
	•	AI-based Assessment: Uses GPT-4 to analyze and classify solutions based on:
	•	Solution Fit: Whether the solution aligns with the stated problem.
	•	Circular Economy Fit: If the solution supports sustainability principles.
	•	Loop Classification: Assigns solutions to one of four loops:
	1.	Material Loop (Resource Efficiency)
	2.	Product & Energy Loop (Economic Sustainability)
	3.	Biosphere Loop (Environmental Conservation)
	4.	Social Loop (Community Impact)
	•	Business & Market Analysis: AI generates structured ratings for:
	•	Risk Assessment (1-10)
	•	Market Size Estimation (1-10)
	•	Solution Innovativeness (1-10)
	•	Feasibility Analysis (1-10)
	•	Return on Investment (ROI in %)
	•	Scalability Evaluation (1-10)
	•	Ranking Mechanism: Assigns a final Loop Score to determine the top solutions.

How to Run the Project

1. Install Dependencies

pip install -r requirements.txt

2. Run the AI Model (Jupyter Notebook)

jupyter notebook aiearth4.ipynb

3. Run the Web App

If app.py is a Flask or Streamlit app, run:

python app.py

or for Streamlit:

streamlit run app.py

Example Output

Problem Statement	Solution	Risk	Market	ROI	Loop Score
Electronic waste recycling is inefficient	AI-powered e-waste sorting system	6	8	25%	7
Lack of incentives for plastic recycling	Deposit return scheme for plastics	5	7	30%	8
Short lifespan of consumer electronics	Modular repairable electronics	7	8	20%	9

Next Steps
	•	Improve data preprocessing and GPT-4 prompt tuning.
	•	Enhance UI with interactive filtering for investors and policymakers.
	•	Integrate real-time data on market and sustainability impact.

Contributors
	•	Sai Chakradhar


License

This project is open-source under the MIT License.

