package examples;


import model.Event;
import utility.FileHelper;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static utility.FileHelper.DATEFORMAT;

/**
 * Copyright 2017 Goldman Sachs.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
@Path("events")
public class Example12Resource {

    /**
     * Example 12 Instructions:
     *
     * Fill in the function below to return a list of events that occur in between the start and end dates (inclusive)
     *
     * Hint: Read in the dates as Strings
     *
     * URL: http://localhost:8080/events/startDate/2017-03-07/endDate/2017-03-14
     */
    @GET
    @Path("startDate/{start}/endDate/{end}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Event> getEventsInRange(@PathParam("start") String s, @PathParam("end") String d  ) throws ParseException, IOException {

        Date startDate = DATEFORMAT.parse(s);
        Date endDate = DATEFORMAT.parse(d);

        List<Event> events = FileHelper.readAllEvents("events.json");

        List<Event> eventsInRange = new ArrayList<>();
        for (Event event: events) {
            if ((event.getDate().before(endDate) || event.getDate().equals(endDate))
                    && (event.getDate().after(startDate) || event.getDate().equals(startDate))) {
                eventsInRange.add(event);
            }
        }
        return eventsInRange;

    }

}
