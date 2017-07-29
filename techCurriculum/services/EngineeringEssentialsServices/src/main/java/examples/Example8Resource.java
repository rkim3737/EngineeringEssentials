package examples;

import model.Event;
import utility.FileHelper;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.List;


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
public class Example8Resource {

    /**
     * Example 8 Instructions:
     * Fill in the method below so that for a given country, this endpoint returns the number of wins that country has
     *
     * Hint: Don't forget the @PathParam annotation
     *
     * URL: http://localhost:8080/events/UnitedStates/wins
     * URL: http://localhost:8080/events/China/wins
     *
     */
    @GET
    @Path("{country_name}/wins")
    public int getWins(@PathParam("country_name") String country) throws IOException {
        List<Event> allEvents = FileHelper.readAllEvents("events.json");

        int winCount = 0;
        for( Event event: allEvents ){
            if( event.getWinningCountry().name().equalsIgnoreCase( country ))
                ++winCount;
        }

//        return Response.status(Response.Status.OK).entity( String.valueOf(winCount) ).build();
//        System.out.println(winCount);
        return winCount;
    }


}

