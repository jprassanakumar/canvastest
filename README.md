# Desk.com Canvas: Draft reply to Article
The **Draft Reply to Article** is a Desk.com Canvas application that creates a new article from a drafted email. At this time, it can only create the article before you hit send. The reply must be unsent. 

## I. Deploy the Application
First, install this application by deploying the source code to your Heroku account. To deploy your application, simply click this button:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fjprassanakumar%2Fcanvastest)

## II. Create the Integration URL
Now that you have the application on Heroku, go ahead and create the integration URL.

1. In the **Name** field, add a title for the this application. In this example, we’ll you use 'Create an Article from your Draft'.

2. The **Description** field, though optional, is a way to give a general description of the integration URL.

3. Select 'Canvas iFrame' from the **Open Location** dropdown.

4. In the **URL** field, add the URL of your heroku application.

5. Toggle the **Enabled** button to 'Yes' and select the [Permission level](https://support.desk.com/customer/portal/articles/1146981?b_id=7112&t=568640).

6. Click the **Update** button.

## III. Add it to your Case Layout
Now display the canvas application on your Case Layout.

1. **Go to Cases >> Next Gen Case Layouts**

2. Find the **Create an Article from your Draft** canvas application in the **Integrations** section on the right side of the screen.

3. **Drag** and **Drop** the application in your case layout.

4. Scroll over the left side of the 'Create an Article from your Draft' bar and click on the gear to open the **Edit** window. Adjust the pixel **Height** to **50** and **Position**, the order in which it appears in Case Details on the dashboard. Click **Save**.

## IV. Dashboard Confirmation
After you have added the canvas application to your layout and selected users, open a ticket and you should see the Create an Article from your Draft section under **Case Details**.


