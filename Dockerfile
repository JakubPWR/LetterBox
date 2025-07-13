FROM maven:3.9.6-eclipse-temurin-17-alpine
WORKDIR /app
COPY pom.xml ./
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/letterbox-0.0.1-SNAPSHOT.jar"]
