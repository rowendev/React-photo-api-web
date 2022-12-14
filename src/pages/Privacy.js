import React from "react";
// mui
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 10 }}>
          <Typography sx={{ fontFamily: "Noto Sans TC", fontSize: "0.85rem" }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Privacy() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", px: "3rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="中文版" {...a11yProps(0)} />
          <Tab label="English" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        非常歡迎您光臨「○○網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
        一、隱私權保護政策的適用範圍
        隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
        二、個人資料的蒐集、處理及利用方式 •
        當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
        •
        本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
        • 於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP
        位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
        •
        為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
        •
        您可以隨時向我們提出請求，以更正或刪除本網站所蒐集您錯誤或不完整的個人資料。
        三、資料之保護 •
        本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
        •
        如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
        四、網站對外的相關連結
        本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
        五、與第三人共用個人資料之政策
        本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
        前項但書之情形包括不限於： • 經由您書面同意。 • 法律明文規定。 •
        為免除您生命、身體、自由或財產上之危險。 •
        與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。
        •
        當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。
        • 有利於您的權益。 •
        本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。
        六、Cookie 之使用
        為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的
        Cookie，若您不願接受 Cookie
        的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie
        的寫入，但可能會導致網站某些功能無法正常執行 。 七、隱私權保護政策之修正
        本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
      </TabPanel>
      <TabPanel value={value} index={1}>
        Who We Are At [YOURSITE.com], we are committed to maintaining the trust
        and confidence of all visitors to our web site. In particular, we want
        you to know that [YOURSITE.com] is not in the business of selling,
        renting or trading email lists with other companies and businesses for
        marketing purposes.  In this Privacy Policy, we’ve provided detailed
        information on when and why we collect personal information, how we use
        it, the limited conditions under which we may disclose it to others, and
        how we keep it secure.  We take your privacy seriously and take measures
        to provide all visitors and users of [YOURSITE.com] with a safe and
        secure environment. Cookies  [YOURSITE.com] may set and access
        [YOURSITE.com] cookies on your computer.  Cookies are used to provide
        our system with the basic information to provide the services you are
        requesting.  Cookies can be cleared at any time from your internet
        browser settings.  Google Analytics When someone visits [YOURSITE.com]
        we use a third party service, Google Analytics, to collect standard
        internet log information and details of visitor behaviour patterns. We
        do this to track things such as the number of visitors to the various
        parts of the site and interactions with the site. This information is
        processed in a way which does not identify anyone. We do not make, and
        do not allow Google to make, any attempt to find out the identities of
        visitors to our website.  Website Comments When someone visits
        [YOURSITE.com], there may be an ability to submit comments on particular
        articles or pages.  When comments are submitted, you are entitled to use
        aliases or information that completely hides your identity. When a
        comment is submitted, the relevant details (name, email, website) that
        you provide are stored.  These details are stored so that we can display
        your comment back to you, and to anyone viewing the comment sections on
        the site. We do not verify information entered nor do we require
        verification. Third Parties There may be some circumstances where your
        IP address, geographic location, and other browser related details may
        be shared with third party companies.  We may share your above mentioned
        data with following third party companies from time to time. Access to
        Your Personal Information You are entitled to view, amend, or delete the
        personal information that we hold. Email your request to our data
        protection officer [YOUR FIRST NAME] at [EMAIL ADDRESS] and we will work
        with you to remove any of your personal data we may have. Changes to Our
        Privacy Policy We may make changes to our Privacy Policy in the future,
        however, the most current version of the policy will govern our
        processing of your personal data and will always be available to you. If
        we make a change to this policy that, in our sole discretion, is
        material, we will notify you by an update or email, where possible. By
        continuing to access or use our services, you agree to be bound to the
        terms of our Privacy Policy.
      </TabPanel>
    </Box>
  );
}
