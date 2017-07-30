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

package examples;

import model.Company;
import utility.FileHelper;
import utility.InputValidator;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

// TODO - add your @Path here
@Path("company")
public class CompanyResource {

    // TODO - Add a @GET resource to get company data
    // Your service should return data for a given stock ticker
    @GET
    @Path("{symbol}")
    public String getCompany(@PathParam("symbol") String companySymbol ) throws IOException {
        List<Company> allCompanies = InputValidator.readAllCompanies("companyInfo.json");
        Company target = null;

//        return allCompanies.toString();

        System.out.println(allCompanies);
        System.out.println(allCompanies.get(0));

        for( Company co : allCompanies ){
            if( co.getSymbol().equalsIgnoreCase(companySymbol) )
                target = co;
        }

        return target.getName();
    }


    @GET
    @Path("hello")
    public String sayHello(){
        return "Hello";
    }
}
