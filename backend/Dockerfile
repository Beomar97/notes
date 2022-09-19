FROM azul/zulu-openjdk-alpine:17.0.2-jre
VOLUME /tmp
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} notes.jar
ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar /notes.jar ${0} ${@}"]