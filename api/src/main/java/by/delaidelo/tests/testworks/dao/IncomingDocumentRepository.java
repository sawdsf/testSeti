package by.delaidelo.tests.testworks.dao;

import by.delaidelo.tests.testworks.domain.IncomingDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomingDocumentRepository extends JpaRepository<IncomingDocument, Long> {}