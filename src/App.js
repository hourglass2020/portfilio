import MainLayout from "./components/layouts/MainLayout";
import Sidebar from './components/Sidebar';
import ContentContainer from './components/ContentContainer';
import { useState } from "react";
import TabPanel from './components/tabs/TabPanel';
import { Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer >
        <TabPanel value={value} index={0}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            صفحه اصلی
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            درباره من
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            رزومه من
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            نمونه کارها
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            نظرات دانشجویان
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
            ارتباط با من
          </Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
}

export default App;
