const textData = [
  {
    heading: "Access to medicine",
    text: [
      "We strive to make our medicines accessible to every patient who needs them.At taiba, we have long-standing experience with Named Patient Sales (NPS) programs in the Middle East.<br> <br> We strive to make our medicines accessible to every patient who needs them. At taiba, we have long-standing experience with Named Patient Sales (NPS) programs in the Middle East.",
    ],
    logo: "./assets/img/Patient support/Access/AccessToMedicine.png",
  },
  {
    heading: "Community support",
    text: [
      "As part of our corporate social responsibility, we support advocacy groups to raise awareness about diseases and improve healthcare access. For more than  20 years, taiba has been a pioneer in ensuring therapy access.<br> <br>bridging channels between critical stakeholders for the ultimate goal of serving patients in the Middle East and Africa. We play a significant role in celebrating international disease days in cooperation with key opinion leaders, patients, and families.",
    ],
    logo: "./assets/img/Patient support/Access/CommunitySupport.png",
  },
  {
    heading: "Disease diagnostics",
    text: [
      "A patient journey to confirm a rare disease diagnosis takes about seven years on average in our region. taiba and partners work together to speed up diagnosis by providing advanced diagnostic tools and the latest technologies, including genetic testing.<br>We recognize the need to continuously support patients in diagnostics through our partnerships with local stakeholders and communities. Incredible progress has been made in treating orphan diseases in our region due to early detection. We will continue seeking additional ways to enhance patients quality of life and shorten their suffering.",
    ],
    logo: "./assets/img/Patient support/Access/DiseaseDiagnostics.png",
  },
  {
    heading: "Commitment to patients",
    text: [
      "taiba is a leader in providing innovative medicines for our patients in the Middle East and Africa. We embrace every opportunity to tackle the unmet medical needs of patients. <br> <br>taiba, with a strong mindset of improving patient experience and quality of life, has been and will continue networking with communities, stakeholders and charities to serve this noble objective.",
    ],
    logo: "./assets/img/Patient support/Access/CommitmentToPatients.png",
  },
];

const patientSupportInfoContainers = document.querySelectorAll(
  ".patient-support-info-container"
);
const patientSupportHeading = document.querySelector(
  ".patient-support-heading"
);
const patientSupportIcon = document.querySelector(".patient-support-icon");
const patientSupportText = document.querySelector(".patient-support-text");
const supportHeadings = document.querySelectorAll(".support-heading");
const supportImgs = document.querySelectorAll(".support-img");

patientSupportInfoContainers.forEach((psc, i) => {
  psc.addEventListener("click", (e) => {
    const name = e.target.childNodes[3].innerText.toLowerCase();
    const newTextData = textData.filter((data) => {
      return data.heading.toLowerCase() === name;
    });

    supportHeadings[i].innerText = patientSupportHeading.innerText;
    supportImgs[i].setAttribute("src", patientSupportIcon.getAttribute("src"));
    patientSupportHeading.innerText = newTextData[0].heading;
    patientSupportText.innerHTML = newTextData[0].text;
    patientSupportIcon.setAttribute("src", newTextData[0].logo);
  });
});
