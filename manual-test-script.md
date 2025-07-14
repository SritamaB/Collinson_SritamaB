### Weather & Activity Suggestion - End-to-End Test Cases

#### 🔧 Preconditions
- A valid city name with latitude and longitude
- Open-Meteo API is running



### 📋Test Scenarios

#### **Step 1**
**Action:** Run the request
```http
https://api.open-meteo.com/v1/forecast?latitude=${Coords.lat}&longitude=${Coords.lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto
```
**Expected Result:**
- ✅ Response status should be `200`
- ✅ Response body should contain:
  - `daily.temperature_2m_max`
  - `daily.temperature_2m_min`

---
#### **Step 2.**

**Action:** Run the request
```http
https://api.activity-rank.com/v1/forecast?max_temp=daily.temperature_2m_max&min_temp=daily.temperature_2m_min&city=CapeTown&date=DATE
```
**Expected Result:**
- ✅ Response status should be `200`
- ✅ Response body should contain:
  - `date`
  - `activity`: including
    - `activity name`
    - `activity rank`
    - `activity reason`

---

#### **Step 3**

**Action:** Open the web app  
**Expected Result:** 
The WebApp home page should open [Assuming the form is at the home app]
The page should contain the following:
- City text box
- "Get Activity" button
- "Clear Data" button

---

#### ** Step 4.**

**Action:** Enter invalid city name `TESTCITY` and click "Get Activity"
**Expected Result:**  
- ❌ Error message should be shown:  
  ```
  City Not Found
  ```

---

#### ** Step 5**

**Action:** Click "Clear Data" 
**Expected Result:**  
- ✅ The form fields should be cleared

---

#### ** Step 6 **

**Action:** Enter `TestCITY` and wait for autocomplete  
**Expected Result:**  
- ⚠️ Autocomplete should display:  
  ```
  City not Found
  ```

---

#### **Step 7**

**Action:** Enter valid city name `Cape Town` and click "Get Activity"
**Expected Result:** Text area below the button should show:
1. ✅ City Name  
2. ✅ Date  
3. ✅ Activity (list sorted by rank):
   - 3.a Rank
   - 3.b Activity Name
   - 3.c Reason

---

#### **Step 8**

**Action:** Compare UI activity details to Step 2’s API response  
**Expected Result:**  
- ✅ UI should match:
  - Date
  - Activity list (name, rank, reasoning)

---

#### **Step 9**

**Action:** Click **Clear Data**  
**Expected Result:**  
- ✅ Form should be reset