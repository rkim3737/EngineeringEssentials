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

package utility;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import model.Company;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * Utility class to validate inputs
 */
public class InputValidator {
    private static final ObjectMapper mapper = new ObjectMapper();


    // TODO - write a method that will validate your JSON input files
    public static List<Company> readAllCompanies(String fileName) throws IOException {

        InputStream inputStream = new FileInputStream(("data" + File.separatorChar + fileName));
//        InputStream resourceAsStream = FileHelper.class.getClassLoader().getResourceAsStream(fileName);
        return mapper.readValue(inputStream, new TypeReference<List<Company>>() {
        });
    }



    // TODO - write a method that will validate the inputs to the Company Resource

    // TODO - write a method that will validate the inputs to the Stock Resource

}
