package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

/** Servlet responsible for creating new tasks. */
@WebServlet("/new-task")
public class NewTaskServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Sanitize user input to remove HTML tags and JavaScript.
    String paitent_name = Jsoup.clean(request.getParameter("paitent_name"), Whitelist.none());
    String email = Jsoup.clean(request.getParameter("email"), Whitelist.none());
    String state = Jsoup.clean(request.getParameter("state"), Whitelist.none());
    long timestamp = System.currentTimeMillis();
    String date = Jsoup.clean(request.getParameter("date"), Whitelist.none());
    String reason = Jsoup.clean(request.getParameter("reason"), Whitelist.none());

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Task");
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("paitent_name", paitent_name)
            .set("state", state)
            .set("timestamp", timestamp)
            .set("email", email)
            .set("date", date)
            .set("reason", reason)
            .build();
    datastore.put(taskEntity);

    response.sendRedirect("/index.html");
  }
  // write method to retretive data  Name and location(state);
}
