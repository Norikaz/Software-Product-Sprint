package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;
import com.google.sps.data.RecordTask;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/recordtasks")
public class RecordsTaskServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    Query<Entity> query =
    //set order by filter by date
        Query.newEntityQueryBuilder().setKind("Task").setOrderBy(OrderBy.asc("timestamp")).build();
    QueryResults<Entity> results = datastore.run(query);

    List<RecordTask> tasks = new ArrayList<>();
    while (results.hasNext()) {
      Entity entity = results.next();
      String email = entity.getString("email");
      String state = entity.getString("state");
      String reason = entity.getString("reason");

      RecordTask task = new RecordTask(email,state,reason);
      tasks.add(task);
    }

    Gson gson = new Gson();

    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(tasks));
  }
}
