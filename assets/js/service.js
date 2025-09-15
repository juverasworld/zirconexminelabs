document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service");
  const services = {
    "sampling-testing": {
      title: "Sampling & Testing of Metals",
      description:
        "We offer world-class metal sampling and testing services to guarantee that your mineral samples meet international quality standards before sale or processing.",
      subservices: [
        "Sample Collection & Preparation: On-site sample collection, labeling, crushing, grinding, and homogenization for accurate lab analysis.",
        "Spectrochemical Analysis: Using XRF, ICP-OES, and AAS techniques to determine metal content and trace elements.",
        "Moisture & Density Testing: Critical for determining shipping weight and pricing of concentrates.",
        "Compliance Reporting: Detailed test certificates formatted to meet local and international trade requirements.",
      ],
      faqs: [
        {
          question: "What types of metals can Zirconex test?",
          answer:
            "We test a wide range of metals using advanced spectrochemical techniques (XRF, ICP-OES, AAS) to determine content and trace elements, tailored to your project needs.",
        },
        {
          question: "How long does it take to get test results?",
          answer:
            "Our optimized workflows ensure fast turnarounds, with standard test results delivered promptly. Clients can track progress in real-time via our secure client portal.",
        },
        {
          question: "Are your test reports internationally recognized?",
          answer:
            "Yes, our detailed test certificates are formatted to meet local and international trade requirements, ensuring compliance and acceptance globally.",
        },
        {
          question: "How do you ensure sample integrity?",
          answer:
            "We follow a strict chain-of-custody, with barcoding for traceability and rigorous QA/QC procedures, including blanks, duplicates, and certified reference materials.",
        },
      ],
    },
    "concentrates-ores": {
      title: "Mineral Concentrates & Ores Testing",
      description:
        "Our laboratory specializes in testing a wide range of mineral concentrates and ores for purity, composition, and economic value.",
      subservices: [
        "Multi-Element Analysis: Comprehensive identification of valuable minerals and impurities.",
        "Ore Beneficiation Studies: Determine the most efficient methods for ore upgrading and processing.",
        "Concentrate Grading: Classifying concentrates according to international standards (e.g., LME specs).",
        "Environmental Impact Screening: Ensure tested ores comply with environmental and export regulations.",
      ],
      faqs: [
        {
          question: "What minerals can you test?",
          answer:
            "We test a wide range of mineral concentrates and ores, identifying valuable minerals and impurities using advanced multi-element analysis.",
        },
        {
          question: "How do you ensure compliance with export regulations?",
          answer:
            "Our environmental impact screening and compliance reporting ensure that tested ores meet both local and international regulatory standards.",
        },
        {
          question: "What is concentrate grading?",
          answer:
            "We classify concentrates according to international standards like LME specs, ensuring they meet market requirements.",
        },
        {
          question: "Can you provide beneficiation recommendations?",
          answer:
            "Yes, our ore beneficiation studies identify the most efficient methods for upgrading and processing your ores.",
        },
      ],
    },
    "pit-assessment": {
      title: "Quality Assessment of Mining Pits",
      description:
        "We provide professional evaluation of active and potential mining pits to help investors and operators maximize yield.",
      subservices: [
        "Pit Mapping & Surveying: Detailed topographic surveys and 3D pit models.",
        "Grade Control & Sampling: In-pit sampling for consistent ore quality.",
        "Safety & Risk Assessment: Identify potential hazards and propose mitigation plans.",
        "Yield Estimation: Accurate reserve calculations to guide production planning.",
      ],
      faqs: [
        {
          question: "What does pit mapping involve?",
          answer:
            "Our pit mapping includes detailed topographic surveys and 3D modeling to provide a comprehensive view of the mining pit.",
        },
        {
          question: "How do you ensure safety during assessments?",
          answer:
            "We conduct thorough safety and risk assessments to identify hazards and propose actionable mitigation plans.",
        },
        {
          question: "Can you estimate pit yields?",
          answer:
            "Yes, we provide accurate reserve calculations to guide production planning and maximize yield.",
        },
        {
          question: "How is grade control maintained?",
          answer:
            "We perform in-pit sampling to ensure consistent ore quality throughout the mining process.",
        },
      ],
    },
    "geological-exploration": {
      title: "Geological Exploration & Exploitation",
      description:
        "Our team of geologists and field engineers conduct end-to-end exploration projects to identify and exploit mineral deposits.",
      subservices: [
        "Geological Mapping: Field reconnaissance and geological data collection.",
        "Geophysical & Geochemical Surveys: Use of magnetics, resistivity, and soil sampling to pinpoint targets.",
        "Core Drilling & Logging: Collection and analysis of drill cores to confirm deposit quality.",
        "Resource Modeling & Feasibility Studies: Economic assessment of mineral projects to support funding and development.",
      ],
      faqs: [
        {
          question: "What is involved in geological mapping?",
          answer:
            "Our geological mapping includes field reconnaissance and data collection to identify potential mineral deposits.",
        },
        {
          question: "What types of surveys do you conduct?",
          answer:
            "We use geophysical (magnetics, resistivity) and geochemical (soil sampling) surveys to pinpoint mineral targets.",
        },
        {
          question: "How does core drilling help?",
          answer:
            "Core drilling and logging allow us to collect and analyze samples to confirm the quality and extent of mineral deposits.",
        },
        {
          question: "What are feasibility studies?",
          answer:
            "Our feasibility studies provide economic assessments to support funding and development decisions for mineral projects.",
        },
      ],
    },
    "exploration-machines": {
      title: "Very Rugged Exploration Machines",
      description:
        "We supply and lease industry-standard exploration equipment designed for rugged terrain and heavy-duty operations.",
      subservices: [
        "Equipment Leasing: Short- and long-term lease of drilling rigs, core splitters, and sample preparation tools.",
        "Maintenance & Servicing: Preventive and corrective maintenance for equipment uptime.",
        "Operator Training: Skilled personnel training for safe and efficient equipment handling.",
        "Spare Parts & Accessories: Ready supply of essential parts for continuous operation.",
      ],
      faqs: [
        {
          question: "What types of equipment do you offer?",
          answer:
            "We supply and lease drilling rigs, core splitters, and sample preparation tools designed for rugged terrain.",
        },
        {
          question: "Do you provide maintenance for leased equipment?",
          answer:
            "Yes, we offer preventive and corrective maintenance to ensure equipment uptime and reliability.",
        },
        {
          question: "Can you train our team to use the equipment?",
          answer:
            "We provide operator training to ensure safe and efficient handling of all exploration equipment.",
        },
        {
          question: "Are spare parts readily available?",
          answer:
            "Yes, we maintain a ready supply of essential spare parts and accessories for continuous operation.",
        },
      ],
    },
    "site-assessment": {
      title: "Site Assessment & Feasibility Studies",
      description:
        "We provide comprehensive site assessment and feasibility studies to determine the economic viability and operational requirements for new or existing mining projects.",
      subservices: [
        "Geological & Topographic Survey: Detailed mapping and evaluation of site conditions.",
        "Geotechnical Analysis: Soil and rock mechanics studies to determine ground stability for mining operations.",
        "Hydrological & Environmental Assessment: Evaluation of water sources, drainage, and potential environmental impact.",
        "Economic Feasibility Study: Full cost-benefit analysis, capital expenditure forecasts, and return-on-investment projections.",
        "Risk Analysis & Mitigation Planning: Identify potential operational, legal, and financial risks with actionable mitigation strategies.",
      ],
      faqs: [
        {
          question: "What does a site assessment include?",
          answer:
            "Our assessments include geological, topographic, geotechnical, hydrological, and environmental evaluations to ensure comprehensive site analysis.",
        },
        {
          question: "How do feasibility studies benefit my project?",
          answer:
            "Our studies provide cost-benefit analysis, capital expenditure forecasts, and ROI projections to support project planning and funding.",
        },
        {
          question: "What risks do you assess?",
          answer:
            "We identify operational, legal, and financial risks and provide actionable mitigation strategies.",
        },
        {
          question: "How do you address environmental concerns?",
          answer:
            "We conduct hydrological and environmental assessments to evaluate and minimize potential impacts.",
        },
      ],
    },
    "license-processing": {
      title: "Mining License Processing & Compliance",
      description:
        "We guide investors and operators through the entire process of obtaining mining licenses and ensuring continuous regulatory compliance.",
      subservices: [
        "Application Documentation & Submission: Preparation of required technical and legal documents for licensing.",
        "Regulatory Liaison: Direct engagement with government agencies to fast-track approval.",
        "Environmental & Social Impact Compliance: Ensure compliance with environmental impact assessment (EIA) requirements and community relations standards.",
        "License Renewal & Upgrades: Ongoing support for license renewals, expansions, or conversions to higher-level mining titles.",
        "Audit & Reporting: Regular compliance audits and submission of mandatory reports to authorities.",
      ],
      faqs: [
        {
          question: "How do you assist with license applications?",
          answer:
            "We prepare and submit all required technical and legal documentation to streamline the licensing process.",
        },
        {
          question: "Can you expedite license approvals?",
          answer:
            "Yes, our regulatory liaison services engage directly with government agencies to fast-track approvals.",
        },
        {
          question: "What is involved in environmental compliance?",
          answer:
            "We ensure compliance with EIA requirements and community relations standards to meet regulatory demands.",
        },
        {
          question: "Do you support license renewals?",
          answer:
            "Yes, we provide ongoing support for renewals, expansions, and conversions of mining licenses.",
        },
      ],
    },
    "operations-support": {
      title: "Mining Operations Support",
      description:
        "We deliver professional support services to optimize day-to-day mining operations and improve productivity.",
      subservices: [
        "Mine Planning & Design: Development of short- and long-term mine plans.",
        "Equipment Supply & Maintenance: Procurement, leasing, and servicing of mining equipment.",
        "Workforce Training & HSE Compliance: Training mine workers on health, safety, and environmental best practices.",
        "Production Monitoring & Optimization: On-site monitoring to ensure consistent yield and reduce downtime.",
        "Technical Advisory: Continuous consultation with geologists, metallurgists, and mining engineers.",
      ],
      faqs: [
        {
          question: "What does mine planning involve?",
          answer:
            "We develop short- and long-term mine plans to optimize operations and productivity.",
        },
        {
          question: "Do you provide equipment support?",
          answer:
            "Yes, we offer procurement, leasing, and maintenance services for mining equipment.",
        },
        {
          question: "How do you ensure safety compliance?",
          answer:
            "We train workers on health, safety, and environmental (HSE) best practices to ensure compliance.",
        },
        {
          question: "What is production monitoring?",
          answer:
            "We provide on-site monitoring to ensure consistent yield and minimize operational downtime.",
        },
      ],
    },
    "export-facilitation": {
      title: "Mineral Export Facilitation",
      description:
        "Our export facilitation services ensure smooth, legal, and cost-effective international trade of minerals.",
      subservices: [
        "Export Documentation & Permits: Preparation of export permits, certificates of origin, and other required documents.",
        "Customs Clearance & Logistics Coordination: Partnering with shipping agents and customs to ensure timely exports.",
        "Quality Certification: Providing internationally recognized quality certificates for minerals.",
        "Pricing & Market Intelligence: Advising clients on prevailing global market prices and trade opportunities.",
        "Regulatory Compliance: Ensure all shipments comply with Nigerian and destination country export regulations.",
      ],
      faqs: [
        {
          question: "What documentation do you provide for exports?",
          answer:
            "We prepare export permits, certificates of origin, and other required documents for smooth international trade.",
        },
        {
          question: "How do you handle customs clearance?",
          answer:
            "We partner with shipping agents and customs authorities to ensure timely and compliant exports.",
        },
        {
          question: "Are your quality certificates recognized globally?",
          answer:
            "Yes, we provide internationally recognized quality certificates for all mineral exports.",
        },
        {
          question: "Can you provide market intelligence?",
          answer:
            "We advise clients on global market prices and trade opportunities to maximize export value.",
        },
      ],
    },
  };

  if (service && services[service]) {
    // Update page title and heading
    document.getElementById("service-title").textContent =
      services[service].title;
    document.getElementById("service-heading").textContent =
      services[service].title;
    document.getElementById("service-description").textContent =
      services[service].description;

    // Update sub-services
    const subservicesList = document.getElementById("subservices-list");
    subservicesList.innerHTML = services[service].subservices
      .map((item) => `<li>${item}</li>`)
      .join("");

    // Update FAQs
    const accordionBox = document.querySelector(".accordion-box");
    accordionBox.innerHTML = services[service].faqs
      .map(
        (faq, index) => `
            <li class="accordion block ${index === 2 ? "active-block" : ""}">
                <div class="acc-btn ${index === 2 ? "active" : ""}"><h4><span>${
          index + 1
        }.</span>${faq.question}</h4></div>
                <div class="acc-content ${index === 2 ? "current" : ""}">
                    <div class="content">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            </li>
        `
      )
      .join("");

    // Update sidebar current class
    document.querySelectorAll(".category-list li a").forEach((link) => {
      link.classList.remove("current");
      if (link.getAttribute("href").includes(`service=${service}`)) {
        link.classList.add("current");
      }
    });
  }
});
